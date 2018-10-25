<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
use ElectricalBlog\Http\Requests\JobRequest;
use ElectricalBlog\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class JobController extends Controller
{
    public function index()
    {
        return view('admin.jobs.index');
    }

    public function create()
    {
        $categories = Category::pluck('name', 'id');
        return view('admin.jobs.create', compact('categories'));
    }

    public function show(Job $job)
    {
        return view('jobs.show', compact('job'));
    }

    public function edit(Job $job)
    {
        $existJobCategoryId = [];
        foreach ($job->categories as $category) {
            $existJobCategoryId[$category->id] = $category->name;
        }
        $categories = Category::pluck('name', 'id');

        return view('admin.jobs.edit', compact('job', 'categories', 'existJobCategoryId'));
    }

    public function store(JobRequest $request)
    {
        flash('Job is created !')->success()->important();
        // dd($request);
        $job = Job::create([
            'body' => $request->body,
            'title' => $request->title,
            'salary' => $request->salary,
            'user_id' => Auth::user()->id ?? 1,
        ]);
        $job->categories()->sync($request->categories);
        return Redirect::route('jobs.index');
    }

    public function update(JobRequest $request, Job $job)
    {
        flash('Job is Edited !')->info()->important();
        // dd($request->readable_time);
        $job->update([
            'body' => $request->body,
            'title' => $request->title,
            'salary' => $request->salary,
            'user_id' => 1,
        ]);
        $job->categories()->sync($request->categories);

        return Redirect::route('jobs.index');
    }

    public function destroy(Job $job)
    {
        flash('Job is Deleted, You can recovery the job from bin !')->error()->important();

        $job->delete();
        return Redirect::route('jobs.index');
    }

    public function trash()
    {
        return view('admin.jobs.trash');
    }

    public function restore(Job $job)
    {
        // dd($request);
        flash('Job is Restored !')->success()->important();
        $job->restore();
        return Redirect::route('jobs.trash');
    }

    public function forceDelete(Job $job)
    {
        flash('Job is Permanently Deleted !')->error()->important();
        $job->forceDelete();
        return Redirect::route('jobs.trash');
    }
}
