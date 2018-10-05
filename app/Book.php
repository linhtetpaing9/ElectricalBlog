<?php

namespace ElectricalBlog;

use Illuminate\Database\Eloquent\SoftDeletes;
use Yajra\Datatables\Datatables;

class Book extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function user()
    {
        return $this->belongsTo(User::class)->withDefault();
    }
    
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'book_categories');
    }

    public function scopeGetDatatableQuery($query, $request)
    {
        return Datatables::of($query)
        ->editColumn('image', '<img width="100" height="100" src="{{ $book_image }}"></img>')
        // ->addColumn("user", function ($query) {
        //     $data = '<p class="text-info">' . $query->user->name .'</p>';
        //     return $data;
        // })
        ->addColumn("image", function ($query) {
            $data = '<img width="100" height="100" src="'. $query->book_image .'></img>';
            return $data;
        })
        ->addColumn("created_at", function ($query) {
            $data = '<span class="badge progress-bar-success">' . $query->created_at->diffForHumans() .'</span>';
            return $data;
        })
        ->addColumn("book_link", function ($query) {
            $data = '<a href="'. $query->book_link.'" class="btn btn-success"><span class="fa fa-download">Download</span></a>';
            return $data;
        })
        // ->addColumn("readable_time", function ($query) {
        //     $data = '<span class="badge progress-bar-danger">' . $query->readable_time .'</span>';
        //     return $data;
        // })
        // ->addColumn("edit", function ($query) {
        //     $data = '<a href='. route("posts.edit", $query->id) .' class="btn btn-info text-info"><span class="fa fa-edit"></span></a>';
        //     return $data;
        // })
        ->addColumn("delete", function ($query) {
            $data = '<form action="' . route('books.destroy', $query->id). '" method="post">'
            . csrf_field() .
            method_field("delete") .
            '<button class="btn btn-danger" onclick="deleteFunction()"><span class="fa fa-trash"></span></a></button>
        </form>';
            return $data;
        })
        ->rawColumns(['image', 'book_link', 'created_at', 'delete'])
        ->toJson();
    }

    public function scopeGetTrashDatatableQuery($query, $request)
    {
        return Datatables::of($query)
        ->addColumn("user", function ($query) {
            $data = '<p class="text-info">' . $query->user->name .'</p>';
            return $data;
        })
        // ->addColumn("post", function ($query) {
        //     $data = '<p class="text-warning">' . $query->post->title .'</p>';
        //     return $data;
        // })
        ->addColumn("restore", function ($query) {
            $data = '<form action="' . route('books.restore', $query->id). '" method="POST">'
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
            $data = '<form action="' . route('books.forceDelete', $query->id). '" method="POST">'
            . csrf_field() .
            '<button class="btn btn-danger" onclick="deleteFunction()"><span class="fa fa-trash"></span></a></button>
        </form>';
            return $data;
        })

        ->rawColumns([ 'restore','user', 'created_at', 'forceDelete' ])
        ->toJson();
    }
}
