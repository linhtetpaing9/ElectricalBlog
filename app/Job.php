<?php

namespace ElectricalBlog;

use Illuminate\Database\Eloquent\SoftDeletes;
use Yajra\Datatables\Datatables;
use Kyawnaingtun\Tounicode\TounicodeTrait;

class Job extends Model
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
    protected $convertable = ['title', 'body', 'salary'];

    public function user()
    {
        return $this->belongsTo(User::class)->withDefault();
    }

    public function recommends()
    {
        return $this->morphMany('ElectricalBlog\Recommend', 'recommendable');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'job_categories');
    }
    
    public function scopeFilter($query, $filters)
    {
        // dd($filters);
        $filters->apply($query);
    }

    public function scopeGetDatatableQuery($query, $request)
    {
        return Datatables::of($query)
        // ->editColumn('image', '<img width="100" height="100" src="{{ $book_image }}"></img>')
        ->addColumn("created_at", function ($query) {
            $data = '<span class="badge progress-bar-success">' . $query->created_at->diffForHumans() .'</span>';
            return $data;
        })
        // ->addColumn("book_link", function ($query) {
        //     $data = '<a href="'. $query->book_link.'" class="btn btn-success"><span class="fa fa-download">Download</span></a>';
        //     return $data;
        // })
        ->addColumn("edit", function ($query) {
            $data = '<a href='. route("jobs.edit", $query->id) .' class="btn btn-info text-info"><span class="fa fa-edit"></span></a>';
            return $data;
        })
        ->addColumn("delete", function ($query) {
            $data = '<form action="' . route('jobs.destroy', $query->id). '" method="post">'
            . csrf_field() .
            method_field("delete") .
            '<button class="btn btn-danger"><span class="fa fa-trash"></span></a></button>
        </form>';
            return $data;
        })
        ->rawColumns([ 'edit', 'created_at', 'delete'])
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
            $data = '<form action="' . route('jobs.restore', $query->id). '" method="POST">'
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
            $data = '<form action="' . route('jobs.forceDelete', $query->id). '" method="POST">'
            . csrf_field() .
            '<button class="btn btn-danger" onclick="deleteFunction()"><span class="fa fa-trash"></span></a></button>
        </form>';
            return $data;
        })

        ->rawColumns([ 'restore','user', 'created_at', 'forceDelete' ])
        ->toJson();
    }
}
