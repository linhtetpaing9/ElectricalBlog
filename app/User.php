<?php

namespace ElectricalBlog;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\HasMedia\HasMedia;

class User extends Authenticatable implements HasMedia
{
    use Notifiable;
    use HasMediaTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'slug'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function getRecommend()
    {
        return Recommend::whereUserId($this->id)->get();
    }

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'role_users');
    }

    public function media()
    {
        return $this->morphMany(Media::class, 'model');
    }

    public function hasPermission($permission)
    {
        if ($this->roles() != null) {
            $user_permissions = $this->roles()->first()->permissions;
            if (array_key_exists($permission, $user_permissions)) {
                if ($user_permissions[$permission]) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
        return false;
    }

    public function hasPolicy($permission)
    {
        if ($this->roles() != null) {
            $user_policy = $this->roles();
        }
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
