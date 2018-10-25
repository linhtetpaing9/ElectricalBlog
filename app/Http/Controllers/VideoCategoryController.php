<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
use Illuminate\Http\Request;

class VideoCategoryController extends Controller
{
    public function show(Category $category)
    {
        return $category->videos->load('categories');
    }
}
