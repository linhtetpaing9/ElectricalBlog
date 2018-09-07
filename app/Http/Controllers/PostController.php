<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Filters\PostFilters;
use ElectricalBlog\Category;
use ElectricalBlog\Http\Requests\PostRequest;
use ElectricalBlog\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class PostController extends Controller
{

    public function index()
    {
        $posts = Post::all([ 'title', 'body' ]);
        // dd($posts);
        return view('posts.index', compact('posts'));
    }
    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }

    public function edit(Post $post)
    {
        $existPostCategoryId = [];
        foreach ($post->categories as $category) {
            $existPostCategoryId[$category->id] = $category->name;
        }
        $categories = Category::pluck('name', 'id');

        return view('posts.edit', compact('post', 'categories', 'existPostCategoryId'));
    }

    public function create()
    {
        $categories = Category::pluck('name', 'id');
        return view('posts.create', compact('categories'));
    }

    public function store(PostRequest $request)
    {
        // dd($request);
        $post = Post::create([
            'body' => $request->body,
            'title' => $request->title,
            'user_id' => 1,
        ]);
        $post->categories()->sync($request->categories);
        return Redirect::route('posts.index');
    }

    public function update(PostRequest $request, Post $post)
    {
        $post->update([
            'body' => $request->body,
            'title' => $request->title,
            'user_id' => 1,
        ]);
        $post->categories()->sync($request->categories);

        return Redirect::route('posts.show', $post->id);
    }

    public function destroy(Post $post)
    {
        dd($post);
    }
}
