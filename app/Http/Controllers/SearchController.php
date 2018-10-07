<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Filters\JobFilters;
use ElectricalBlog\Filters\PostFilters;
use ElectricalBlog\Job;
use ElectricalBlog\Post;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }


    public function searchPost(Request $request, PostFilters $postfilters)
    {
        // dd($request);
        $post = Post::filter($postfilters)->get();
        return $post;
    }

    public function searchJob(Request $request, JobFilters $jobfilters)
    {
        // dd($request);
        $job = Job::filter($jobfilters)->get();
        return $job;
    }
}
