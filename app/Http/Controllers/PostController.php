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
    
    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }

    public function store(PostRequest $request)
    {
        flash('Post is created !')->success()->important();
        // dd($request);
        $post = Post::create([
            'body' => $request->body,
            'title' => $request->title,
            'readable_time' => $request->readable_time,
            'user_id' => 1,
        ]);
        $post->categories()->sync($request->categories);
        return Redirect::route('posts.index');
    }

    public function update(PostRequest $request, Post $post)
    {
        flash('Post is Edited !')->info()->important();
        // dd($request->readable_time);
        $post->update([
            'body' => $request->body,
            'title' => $request->title,
            'readable_time' => $request->readable_time,
            'user_id' => 1,
        ]);
        $post->categories()->sync($request->categories);

        return Redirect::route('posts.index');
    }

    public function destroy(Post $post)
    {
        flash('Post is Deleted, You can recovery the post from bin !')->error()->important();

        $post->delete();
        return Redirect::route('posts.index');
    }

    public function trash()
    {
        return view('admin.posts.trash');
    }

    public function restore(PostRequest $request, Post $post)
    {
        flash('Post is Restored !')->success()->important();

        $post->restore();
        return Redirect::route('posts.trash');
    }

    public function forceDelete(PostRequest $request, Post $post)
    {
        flash('Post is Permanently Deleted !')->error()->important();

        // dd($post);
        $post->forceDelete();
        return Redirect::route('posts.trash');
    }
}
