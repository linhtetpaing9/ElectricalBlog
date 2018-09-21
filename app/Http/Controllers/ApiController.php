<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
use ElectricalBlog\Issue;
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
}
