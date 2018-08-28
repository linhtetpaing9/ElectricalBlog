<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Http\Requests\PostRequest;
use ElectricalBlog\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class PostController extends Controller
{   
    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }

    public function edit(Post $post)
    {
        // dd($post);
        return view('posts.edit', compact('post'));
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store(PostRequest $request)
    {
        // dd($request);
        Post::create([
            'body' => $request->body,
            'title' => $request->title,
            'user_id' => 1,
        ]);
        return Redirect::route('posts.index');
    }

    public function update(PostRequest $request, Post $post)
    {
        $post->update([
            'body' => $request->body,
            'title' => $request->title,
            'user_id' => 1,
        ]);
        return Redirect::route('posts.show', $post->id);
    }

    public function destroy(Post $post)
    {
        dd($post);
    }

    public function apiIndexPost()
    {
        return Post::latest()->get();
    }
}
