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

    public function searchPostsByCategories()
    {
        return Post::with('categories')->latest()->paginate(5);
    }

    public function postIndex(Post $post)
    {
        return Post::with(['issues.reply', 'categories', 'recommends'])
                    ->withCount('recommends')
                    ->findOrFail($post->id);
    }

    public function apiIndexPost()
    {
        return Post::with('categories')->latest()->get();
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
}
