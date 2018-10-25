<?php

namespace ElectricalBlog;

class Role extends Model
{
    protected $casts = [
        'permissions' => 'array'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'role_users');
    }
}
