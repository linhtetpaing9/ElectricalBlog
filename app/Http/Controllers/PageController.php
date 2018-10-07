<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
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
        return view('main-pages.post');
    }

    public function job()
    {
        return view('main-pages.job');
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
