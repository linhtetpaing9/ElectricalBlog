<?php

namespace ElectricalBlog;

use ElectricalBlog\Post;
use Yajra\Datatables\Datatables;

class Issue extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class)->withDefault();
    }

    public function post()
    {
        return $this->belongsTo(Post::class)->withDefault();
    }

    public function scopeGetDatatableQuery($query, $request)
    {
        return Datatables::of($query)
        ->addColumn("body", function ($query) {
            $data = str_limit(($query->body), 100, "...");
            return $data;
        })
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
        ->rawColumns([ 'body', 'user', 'post', 'created_at' ])
        ->toJson();
    // }
    }
}
