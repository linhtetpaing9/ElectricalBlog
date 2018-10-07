<?php

namespace ElectricalBlog;

use ElectricalBlog\Recommend;
use Illuminate\Database\Eloquent\SoftDeletes;
use Yajra\Datatables\Datatables;
use Kyawnaingtun\Tounicode\TounicodeTrait;

class Post extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    use TounicodeTrait;

    /**
     * These are the attributes to convert before saving.
     * To covert automatically from Non-Unicode to Unicode fonts
     * @var array
     */
    protected $convertable = ['title', 'body', 'readable_time'];

    public function user()
    {
        return $this->belongsTo(User::class)->withDefault();
    }
    
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'post_categories');
    }

    public function recommends()
    {
        return $this->morphMany('ElectricalBlog\Recommend', 'recommendable');
    }
    
    public function issues()
    {
        return $this->hasMany(Issue::class);
    }

    public function scopeFilter($query, $filters)
    {
        $filters->apply($query);
    }

    public function scopeGetDatatableQuery($query, $request)
    {
        return Datatables::of($query)
        ->editColumn('title', '<a href="{{route("posts.show", $id)}}"><p class="text-success"> {{ $title }} </p>')
        ->addColumn("user", function ($query) {
            $data = '<p class="text-info">' . $query->user->name .'</p>';
            return $data;
        })
        ->addColumn("created_at", function ($query) {
            $data = '<span class="badge progress-bar-success">' . $query->created_at->diffForHumans() .'</span>';
            return $data;
        })
        ->addColumn("readable_time", function ($query) {
            $data = '<span class="badge progress-bar-danger">' . $query->readable_time .'</span>';
            return $data;
        })
        ->addColumn("edit", function ($query) {
            $data = '<a href='. route("posts.edit", $query->id) .' class="btn btn-info text-info"><span class="fa fa-edit"></span></a>';
            return $data;
        })
        ->addColumn("delete", function ($query) {
            $data = '<form action="' . route('posts.destroy', $query->id). '" method="post">'
            . csrf_field() .
            method_field("delete") .
            '<button class="btn btn-danger"><span class="fa fa-trash"></span></a></button>
        </form>';
            return $data;
        })
        ->rawColumns(['title', 'user', 'created_at', 'edit', 'delete', 'readable_time' ])
        ->toJson();
    }
    public function scopeGetTrashDatatableQuery($query, $request)
    {
        return Datatables::of($query)
        ->addColumn("user", function ($query) {
            $data = '<p class="text-info">' . $query->user->name .'</p>';
            return $data;
        })
        ->addColumn("restore", function ($query) {
            $data = '<form action="' . route('posts.restore', $query->id). '" method="POST">'
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
            $data = '<form action="' . route('posts.forceDelete', $query->id). '" method="POST">'
            . csrf_field() .
            '<button class="btn btn-danger" onclick="deleteFunction()"><span class="fa fa-trash"></span></a></button>
        </form>';
            return $data;
        })

        ->rawColumns([ 'restore','user', 'created_at', 'forceDelete' ])
        ->toJson();
    }
}
