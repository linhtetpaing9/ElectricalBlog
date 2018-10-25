<?php

namespace ElectricalBlog;

use ElectricalBlog\Category;
use Illuminate\Database\Eloquent\SoftDeletes;
use Yajra\Datatables\Datatables;
use Kyawnaingtun\Tounicode\TounicodeTrait;

class Video extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    use TounicodeTrait;
    protected $withCount = ['recommends'];

    /**
     * These are the attributes to convert before saving.
     * To covert automatically from Non-Unicode to Unicode fonts
     * @var array
     */
    protected $convertable = ['name'];

    public function scopeFilter($query, $filters)
    {
        $filters->apply($query);
    }
    
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'video_categories');
    }

    public function recommends()
    {
        return $this->morphMany('ElectricalBlog\Recommend', 'recommendable');
    }

    public function scopeGetDatatableQuery($query, $request)
    {
        return Datatables::of($query)
        ->editColumn('name', '<a href="{{route("videos.show", $id)}}"><p class="text-success"> {{ $name }} </p>')
        ->addColumn("created_at", function ($query) {
            $data = '<span class="badge progress-bar-success">' . $query->created_at->diffForHumans() .'</span>';
            return $data;
        })
        ->addColumn("edit", function ($query) {
            $data = '<a href='. route("videos.edit", $query->id) .' class="btn btn-info text-info"><span class="fa fa-edit"></span></a>';
            return $data;
        })
        ->addColumn("delete", function ($query) {
            $data = '<form action="' . route('videos.destroy', $query->id). '" method="post">'
            . csrf_field() .
            method_field("delete") .
            '<button class="btn btn-danger"><span class="fa fa-trash"></span></a></button>
        </form>';
            return $data;
        })
        ->rawColumns(['name', 'created_at', 'edit', 'delete' ])
        ->toJson();
    }
    public function scopeGetTrashDatatableQuery($query, $request)
    {
        return Datatables::of($query)
        ->addColumn("restore", function ($query) {
            $data = '<form action="' . route('videos.restore', $query->id). '" method="POST">'
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
            $data = '<form action="' . route('videos.forceDelete', $query->id). '" method="POST">'
            . csrf_field() .
            '<button class="btn btn-danger" onclick="deleteFunction()"><span class="fa fa-trash"></span></a></button>
        </form>';
            return $data;
        })

        ->rawColumns([ 'restore', 'created_at', 'forceDelete' ])
        ->toJson();
    }
}
