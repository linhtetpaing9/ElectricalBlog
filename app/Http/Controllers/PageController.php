<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
use ElectricalBlog\Job;
use ElectricalBlog\Post;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home()
    {
        return view('main-pages.home');
    }
    public function book()
    {
        return view('main-pages.book');
    }

    public function post()
    {
        $post_count = Post::count();
        return view('main-pages.post', compact('post_count'));
    }

    public function job()
    {
        $jobs_count = Job::count();
        return view('main-pages.job', compact('jobs_count'));
    }

    public function contact()
    {
        return view('main-pages.contact');
    }

    public function video()
    {
        return view('main-pages.video');
    }
}
