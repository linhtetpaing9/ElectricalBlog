<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
use ElectricalBlog\Post;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        return view('main-pages.index', compact('categories'));
    }
}
