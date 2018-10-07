<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Http\Requests\IssueRequest;
use ElectricalBlog\Issue;
use ElectricalBlog\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class IssueController extends Controller
{
    public function index()
    {
        return view('admin.issues.index');
    }


    public function store(IssueRequest $request, Post $post)
    {
        // dd($post);
        Issue::create([
            'user_id' => 1,
            'post_id' => $post->id,
            'title' => $request->title,
            'body' => $request->body,
        ]);
    }

    public function edit(IssueRequest $request, Issue $issue)
    {
        dd($request);
    }

    public function destroy(Issue $issue)
    {
        flash('Issue is Deleted, You can recovery the Issue from bin !')->error()->important();

        $issue->delete();
        return Redirect::route('issues.index');
    }

    public function trash()
    {
        return view('admin.issues.trash');
    }

    public function restore(Issue $issue)
    {
        // dd($issue);
        flash('Issue is Restored !')->success()->important();
        $issue->restore();
        return Redirect::route('issues.trash');
    }

    public function forceDelete(Issue $issue)
    {
        flash('Issue is Permanently Deleted !')->error()->important();
        $issue->forceDelete();
        return Redirect::route('issues.trash');
    }
}
