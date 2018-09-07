<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
use ElectricalBlog\Post;
use Illuminate\Http\Request;

class PostCategoryController extends Controller
{
    public function index()
    {
        return Post::with('categories')->latest()->get();
    }
    
    public function show(Category $category)
    {
        return $category->posts->load('categories');
    }
}
