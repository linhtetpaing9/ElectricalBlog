<?php

namespace ElectricalBlog;

use Yajra\Datatables\Datatables;

class Post extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class)->withDefault();
    }
    
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'post_categories');
    }
    
    public function issues()
    {
        return $this->hasMany(Issue::class);
    }

    public function scopeFilter($query, $filters)
    {
        // dd($query);
        $filters->apply($query);
    }

    public function scopeGetDatatableQuery($query, $request)
    {
        // if ($request->ajax()) {
            return Datatables::of($query)
            ->editColumn('title', '<a href="{{route("posts.show", $id)}}"><p class="text-success"> {{ $title }} </p>')
            ->editColumn('body', '{{ str_limit(($body), 100, "...") }}')
            ->addColumn("user", function ($query) {
                $data = '<p class="text-info">' . $query->user->name .'</p>';
                return $data;
            })
            ->addColumn("created_at", function ($query) {
                $data = '<span class="badge badge-info">' . $query->created_at->diffForHumans() .'</span>';
                return $data;
            })
            ->addColumn("edit", function ($query) {
                $data = '<a href='. "#" .' class="text-info"><span class="fa fa-edit"></span></a>';
                return $data;
            })
            ->addColumn("destroy", function ($query) {
                $data = '<a href='. "#" .' class="text-danger"><span class="fa fa-trash"></span></a>';
                return $data;
            })

            // ->addColumn("delete", function ($query) {
            //     $data = '<form action="' . route('students.destroy', $query->student_number). '" method="post">'
            //     . csrf_field() .
            //     method_field("delete") .
            //     '<button class="btn btn-danger">Delete</button>
            // </form>';
            //     return $data;
            // })
            ->rawColumns([ 'body', 'title', 'user', 'created_at', 'edit', 'destroy' ])
            ->toJson();
    // }
    }
}
