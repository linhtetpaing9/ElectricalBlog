<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
use ElectricalBlog\Post;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home()
    {
        return view('main-pages.home', compact('categories'));
    }
    public function book()
    {
        return view('main-pages.book');
    }
}
