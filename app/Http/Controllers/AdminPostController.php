<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
use ElectricalBlog\Post;
use Illuminate\Http\Request;

class AdminPostController extends Controller
{
    public function index()
    {
        return view('admin.posts.index');
    }
    
    public function create()
    {
        $categories = Category::pluck('name', 'id');
        return view('admin.posts.create', compact('categories'));
    }

    public function edit(Post $post)
    {
        $existPostCategoryId = [];
        foreach ($post->categories as $category) {
            $existPostCategoryId[$category->id] = $category->name;
        }
        $categories = Category::pluck('name', 'id');

        return view('admin.posts.edit', compact('post', 'categories', 'existPostCategoryId'));
    }
}
