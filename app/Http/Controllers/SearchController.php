<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Book;
use ElectricalBlog\Filters\BookFilters;
use ElectricalBlog\Filters\JobFilters;
use ElectricalBlog\Filters\PostFilters;
use ElectricalBlog\Filters\VideoFilters;
use ElectricalBlog\Job;
use ElectricalBlog\Post;
use ElectricalBlog\Video;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }


    public function searchPost(Request $request, PostFilters $postfilters)
    {
        $post = Post::with('categories')->filter($postfilters)->get();
        return $post;
    }

    public function searchJob(Request $request, JobFilters $jobfilters)
    {
        $job = Job::with('categories')->filter($jobfilters)->get();
        return $job;
    }

    public function searchVideo(Request $request, VideoFilters $videofilters)
    {
        $video = Video::with('categories')->filter($videofilters)->get();
        return $video;
    }

    public function searchBook(Request $request, BookFilters $bookfilters)
    {
        $book = Book::with('categories')->filter($bookfilters)->get();
        return $book;
    }
}
