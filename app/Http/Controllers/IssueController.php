<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Http\Requests\IssueRequest;
use ElectricalBlog\Issue;
use ElectricalBlog\Post;
use Illuminate\Http\Request;

class IssueController extends Controller
{
    public function apiIndexIssue( Post $post )
    {
    	return Post::with('issues')->findOrFail($post->id);
    }

    public function store( IssueRequest $request , Post $post)
    {
    	Issue::create( [
    		'user_id' => 1,
    		'post_id' => $post->id,
    		'title' => $request->title,
    		'body' => $request->body,
    	] );
    }
}
