<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Book;
use ElectricalBlog\Category;
use ElectricalBlog\Feedback;
use ElectricalBlog\Http\Requests\FeedbackForm;
use ElectricalBlog\Issue;
use ElectricalBlog\Job;
use ElectricalBlog\Post;
use ElectricalBlog\Reply;
use ElectricalBlog\User;
use ElectricalBlog\Video;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home()
    {
        return view('main-pages.home');
    }
    public function book()
    {
        $books_count = Book::count();
        return view('main-pages.book', compact('books_count'));
    }

    public function post()
    {
        $posts_count = Post::count();
        return view('main-pages.post', compact('posts_count'));
    }

    public function job()
    {
        $jobs_count = Job::count();
        return view('main-pages.job', compact('jobs_count'));
    }

    public function contact()
    {
        return view('main-pages.contact');
    }

    public function video()
    {
        $videos_count = Video::count();
        return view('main-pages.video', compact('videos_count'));
    }

    public function feedbackStore(FeedbackForm $form)
    {
        $form->persist();
        return redirect()->back();
    }

    public function feedbackDelete(FeedbackForm $form, Feedback $feedback)
    {
        $feedback->delete();
        return redirect()->back();
    }

    public function user(User $user)
    {
        return view('main-pages.user-profile', compact('user'));
    }

    public function deleteReply($post_id, $issue_id, $reply_id)
    {
        Reply::whereIssueId($issue_id)->findOrFail($reply_id)->delete();
    }

    public function deleteIssue($post_id, $issue_id)
    {
        // dd($issue_id);
        Issue::findOrFail($issue_id)->delete();
        Reply::whereIssueId($issue_id)->delete();
    }
}
