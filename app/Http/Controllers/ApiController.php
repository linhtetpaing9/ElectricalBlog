<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Book;
use ElectricalBlog\Category;
use ElectricalBlog\Issue;
use ElectricalBlog\Job;
use ElectricalBlog\Post;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function countCategoriesByPosts()
    {
        $categories = Category::withCount('posts')->get(['name', 'id']);
        return $categories;
    }

    public function countCategoriesByJobs()
    {
        $categories = Category::withCount('jobs')->get(['name', 'id']);
        return $categories;
    }

    public function searchPostsByCategories()
    {
        return Post::with('categories')->latest()->take(10)->get();
    }

    public function postIndex(Post $post)
    {
        return Post::with(['issues.reply', 'categories', 'recommends'])
                    ->withCount('recommends')
                    ->findOrFail($post->id);
    }

    public function postDatatable(Request $request)
    {
        return Post::getDatatableQuery($request);
    }

    public function postTrashDatatable(Request $request)
    {
        return Post::onlyTrashed()->getTrashDatatableQuery($request);
    }

    public function IssueTrashDatatable(Request $request)
    {
        return Issue::onlyTrashed()->getTrashDatatableQuery($request);
    }

    public function issueDatatable(Request $request)
    {
        return Issue::getDatatableQuery($request);
    }

    public function replyDatatable(Request $request)
    {
        return Reply::getDatatableQuery($request);
    }

    public function bookIndex(Book $book)
    {
        return Book::with(['categories', 'recommends'])
                    ->withCount('recommends')
                    ->findOrFail($book->id);
    }

    public function bookDatatable(Request $request)
    {
        return Book::getDatatableQuery($request);
    }

    public function bookTrashDatatable(Request $request)
    {
        return Book::onlyTrashed()->getTrashDatatableQuery($request);
    }

    public function jobDatatable(Request $request)
    {
        return Job::getDatatableQuery($request);
    }

    public function jobTrashDatatable(Request $request)
    {
        return Job::onlyTrashed()->getTrashDatatableQuery($request);
    }

    public function searchJobsByCategories()
    {
        return Job::with('categories')->latest()->get();
    }

    public function JobIndex(Job $job)
    {
        return Job::with('categories')->findOrFail($job->id);
    }

    public function categories()
    {
        return Category::all();
    }
}
