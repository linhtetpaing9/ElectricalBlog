<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Book;
use ElectricalBlog\Category;
use ElectricalBlog\Feedback;
use ElectricalBlog\Issue;
use ElectricalBlog\Job;
use ElectricalBlog\Post;
use ElectricalBlog\Video;
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
        return Post::with('categories')->latest()->take(10)->get();
    }

    public function postIndex(Post $post)
    {
        return Post::with(['issues.reply', 'categories', 'recommends'])->findOrFail($post->id);
    }

    public function postDatatable(Request $request)
    {
        return Post::getDatatableQuery($request);
    }

    public function postTrashDatatable(Request $request)
    {
        return Post::onlyTrashed()->getTrashDatatableQuery($request);
    }

    public function countCategoriesByBooks()
    {
        $categories = Category::withCount('books')->get(['name', 'id']);
        return $categories;
    }

    public function searchBooksByCategories()
    {
        return Book::with('categories')->latest()->get();
    }

    public function bookIndex(Book $book)
    {
        return Book::with(['categories', 'recommends'])->findOrFail($book->id);
    }

    public function bookDatatable(Request $request)
    {
        return Book::getDatatableQuery($request);
    }

    public function bookTrashDatatable(Request $request)
    {
        return Book::onlyTrashed()->getTrashDatatableQuery($request);
    }

    public function countCategoriesByJobs()
    {
        $categories = Category::withCount('jobs')->get(['name', 'id']);
        return $categories;
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

    public function jobIndex(Job $job)
    {
        return Job::with(['categories', 'recommends'])->findOrFail($job->id);
    }

    public function countCategoriesByVideos()
    {
        $categories = Category::withCount('videos')->get(['name', 'id']);
        return $categories;
    }

    public function videoDatatable(Request $request)
    {
        return Video::getDatatableQuery($request);
    }

    public function videoTrashDatatable(Request $request)
    {
        return Video::onlyTrashed()->getTrashDatatableQuery($request);
    }

    public function searchVideosByCategories()
    {
        return Video::with('categories')->latest()->get();
    }

    public function videoIndex(Video $video)
    {
        return Video::with(['categories', 'recommends'])
                    
                    ->findOrFail($video->id);
    }

    public function issueTrashDatatable(Request $request)
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

    public function categories()
    {
        return Category::all();
    }

    public function feedbacks()
    {
        return Feedback::latest()->get();
    }
}
