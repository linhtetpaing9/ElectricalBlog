<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
use ElectricalBlog\Post;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function countCategoriesByPosts()
    {
        $categories = Category::withCount('posts')->get(['name', 'id']);
        return $categories;
    }

    public function apiIndexIssue(Post $post)
    {
        return Post::with(['issues', 'categories'])->findOrFail($post->id);
    }

    public function apiIndexPost()
    {
        return Post::with('categories')->latest()->get();
    }
}
