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
        return view('posts.index', compact('posts'));
    }

    public function create()
    {
    }
    
    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }

    public function edit(Post $post)
    {
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

        return Redirect::route('admin.posts.index');
    }

    public function destroy(Post $post)
    {
        dd($post);
    }
}
