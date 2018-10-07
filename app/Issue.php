<?php

namespace ElectricalBlog;

use ElectricalBlog\Post;
use ElectricalBlog\Reply;
use Illuminate\Database\Eloquent\SoftDeletes;
use Yajra\Datatables\Datatables;
use Kyawnaingtun\Tounicode\TounicodeTrait;

class Issue extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    use TounicodeTrait;

    /**
     * These are the attributes to convert before saving.
     * To covert automatically from Non-Unicode to Unicode fonts
     * @var array
     */
    protected $convertable = ['title', 'body'];

    public function user()
    {
        return $this->belongsTo(User::class)->withDefault();
    }

    public function reply()
    {
        return $this->hasMany(Reply::class);
    }

    public function post()
    {
        return $this->belongsTo(Post::class)->withDefault();
    }

    public function scopeGetDatatableQuery($query, $request)
    {
        return Datatables::of($query)
        ->addColumn("user", function ($query) {
            $data = '<p class="text-info">' . $query->user->name .'</p>';
            return $data;
        })
        ->addColumn("post", function ($query) {
            $data = '<p class="text-success">' . $query->post->title .'</p>';
            return $data;
        })
        ->addColumn("created_at", function ($query) {
            $data = '<span class="badge badge-info">' . $query->created_at->diffForHumans() .'</span>';
            return $data;
        })
        ->addColumn("delete", function ($query) {
            $data = '<form action="' . route('issues.destroy', $query->id). '" method="post">'
            . csrf_field() .
            method_field("delete") .
            '<button class="btn btn-danger"><span class="fa fa-trash"></span></a></button>
        </form>';
            return $data;
        })
        ->rawColumns([ 'delete' ,'user', 'post', 'created_at' ])
        ->toJson();
    }

    public function scopeGetTrashDatatableQuery($query, $request)
    {
        return Datatables::of($query)
        ->addColumn("user", function ($query) {
            $data = '<p class="text-info">' . $query->user->name .'</p>';
            return $data;
        })
        ->addColumn("post", function ($query) {
            $data = '<p class="text-warning">' . $query->post->title .'</p>';
            return $data;
        })
        ->addColumn("restore", function ($query) {
            $data = '<form action="' . route('issues.restore', $query->id). '" method="POST">'
            . csrf_field() .
            '<button class="btn btn-success"><span class="fa fa-undo"></span></a></button>
        </form>';
            return $data;
        })
        ->addColumn("created_at", function ($query) {
            $data = '<span class="badge badge-info">' . $query->created_at->diffForHumans() .'</span>';
            return $data;
        })
        ->addColumn("forceDelete", function ($query) {
            $data = '<form action="' . route('issues.forceDelete', $query->id). '" method="POST">'
            . csrf_field() .
            '<button class="btn btn-danger" onclick="deleteFunction()"><span class="fa fa-trash"></span></a></button>
        </form>';
            return $data;
        })

        ->rawColumns([ 'restore','user', 'post', 'created_at', 'forceDelete' ])
        ->toJson();
    }
}
