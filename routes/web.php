<?php


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'PageController@home');
Route::get('/contacts', 'PageController@contact')->name('contacts.contact');
Route::get('/books', 'PageController@book')->name('books.book');
Route::get('/posts', 'PageController@post')->name('posts.post');
Route::get('/jobs', 'PageController@job')->name('jobs.job');
Route::get('/videos', 'PageController@video')->name('videos.video');



Route::get('/posts/{post}', 'PostController@show')->name('posts.show');
Route::get('/books/{book}', 'BookController@show')->name('books.show');
Route::get('/jobs/{job}', 'JobController@show')->name('jobs.show');
Route::get('/videos/{video}', 'VideoController@show')->name('videos.show');

Route::get('/categories/{category}/posts', 'PostCategoryController@show');
Route::get('/categories/{category}/jobs', 'JobCategoryController@show');
Route::get('/categories/{category}/books', 'BookCategoryController@show');
Route::get('/categories/{category}/videos', 'VideoCategoryController@show');

//Recommend
Route::middleware(['auth'])->group(function () {
    Route::post('/admin/recommends', 'RecommendController@store')->name('recommends.store');
    Route::get('/users/{user}', 'PageController@user')->name('users.user');
    Route::post('/feedbacks', 'PageController@feedbackStore')->name('feedbacks.feedback');
    Route::delete('/feedbacks/{feedback}', 'PageController@feedbackDelete')->name('feedbacks.feedback-delete');
    Route::delete('/posts/{post}/issues/{issues}/replies/{reply}', 'PageController@deleteReply');
    Route::delete('/posts/{post}/issues/{issues}', 'PageController@deleteIssue');
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::middleware(['auth', 'superadmin'])->prefix('admin')->group(function () {
    Route::get('/', function () {
        return view('admin-layouts.admin');
    });
    //Post
    Route::get('posts/trash', 'PostController@trash')->name('posts.trash');

    Route::post(
        'posts/{trashed_post}/restore',
        'PostController@restore'
    )->name('posts.restore');

    Route::post(
        'posts/{trashed_post}/forceDelete',
        'PostController@forceDelete'
    )->name('posts.forceDelete');

    Route::resource('/posts', 'PostController')->except(['show']);


    //Issue
    Route::get('/issues/trash', 'IssueController@trash')->name('issues.trash');

    Route::post(
        'issues/{trashed_issue}/restore',
        'IssueController@restore'
    )->name('issues.restore');

    Route::post(
        'issues/{trashed_issue}/forceDelete',
        'IssueController@forceDelete'
    )->name('issues.forceDelete');

    Route::get('/issues', 'IssueController@index')->name('issues.index');
    Route::delete('/issues/{issue}', 'IssueController@destroy')->name('issues.destroy');
    Route::post('/posts/{post}/issues', 'IssueController@store')->name('issues.store');
    //Category
    Route::resource('/categories', 'CategoryController');

    //Book
    Route::get('books/trash', 'BookController@trash')->name('books.trash');

    Route::post(
        'books/{trashed_book}/restore',
        'BookController@restore'
    )->name('books.restore');

    Route::post(
        'books/{trashed_book}/forceDelete',
        'BookController@forceDelete'
    )->name('books.forceDelete');

    Route::resource('/books', 'BookController')->except(['show']);

    //Job
    Route::get('jobs/trash', 'JobController@trash')->name('jobs.trash');

    Route::post(
        'jobs/{trashed_job}/restore',
        'JobController@restore'
    )->name('jobs.restore');

    Route::post(
        'jobs/{trashed_job}/forceDelete',
        'JobController@forceDelete'
    )->name('jobs.forceDelete');

    Route::resource('/jobs', 'JobController')->except(['show']);

     //Video
    Route::get('videos/trash', 'VideoController@trash')->name('videos.trash');

    Route::post(
        'videos/{trashed_video}/restore',
        'VideoController@restore'
    )->name('videos.restore');

    Route::post(
        'videos/{trashed_video}/forceDelete',
        'VideoController@forceDelete'
    )->name('videos.forceDelete');

    Route::resource('/videos', 'VideoController')->except(['show']);

    //Reply
    Route::resource('/replies', 'ReplyController');

    //FeedBack
    Route::resource('/feedbacks', 'FeedbackController');

    //Role
    Route::resource('/roles', 'RoleController');
});


Route::prefix('api')->group(function () {
    //Post
    Route::get('/posts/datatable', 'ApiController@postDatatable')
    ->name('api.posts.datatable');
    Route::get('/posts/trash/datatable', 'ApiController@postTrashDatatable')
    ->name('api.posts.trash.datatable');
    Route::get('/posts/{post}/issues/replies', 'ApiController@postIndex');
    Route::get('/posts/categories', 'ApiController@searchPostsByCategories');

    //Issue
    Route::get('/issues/datatable', 'ApiController@issueDatatable')
    ->name('api.issues.datatable');
    Route::get('/issues/trash/datatable', 'ApiController@issueTrashDatatable')
    ->name('api.issues.trash.datatable');
    //Category
    Route::get('/categories/posts', 'ApiController@countCategoriesByPosts');
    Route::get('/categories/jobs', 'ApiController@countCategoriesByJobs');
    Route::get('/categories/books', 'ApiController@countCategoriesByBooks');
    Route::get('/categories/videos', 'ApiController@countCategoriesByVideos');
    Route::get('/categories', 'ApiController@categories');

    //Feedback
    Route::get('/feedbacks', 'ApiController@feedbacks');
    
    //Book
    Route::get('/books/datatable', 'ApiController@bookDatatable')
    ->name('api.books.datatable');
    Route::get('/books/trash/datatable', 'ApiController@bookTrashDatatable')
    ->name('api.books.trash.datatable');
    Route::get('/books/categories', 'ApiController@searchBooksByCategories');

    Route::get('/books/{book}', 'ApiController@bookIndex');

    //Video
    Route::get('/videos/datatable', 'ApiController@videoDatatable')
    ->name('api.videos.datatable');
    Route::get('/videos/trash/datatable', 'ApiController@videoTrashDatatable')
    ->name('api.videos.trash.datatable');
    Route::get('/videos/categories', 'ApiController@searchVideosByCategories');
    Route::get('/videos/{video}', 'ApiController@videoIndex');
    //Job
    Route::get('/jobs/datatable', 'ApiController@jobDatatable')
    ->name('api.jobs.datatable');
    Route::get('/jobs/trash/datatable', 'ApiController@jobTrashDatatable')
    ->name('api.jobs.trash.datatable');
    Route::get('/jobs/categories', 'ApiController@searchjobsByCategories');
    Route::get('/jobs/{job}', 'ApiController@jobIndex');

    //User
    Route::get('/isCurrentUsers', function () {
        return Auth::user();
    });

    //Search
    Route::get('/search/posts', 'SearchController@searchPost');
    Route::get('/search/jobs', 'SearchController@searchJob');
    Route::get('/search/books', 'SearchController@searchBook');
    Route::get('/search/videos', 'SearchController@searchVideo');
});

// Authentication Routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::put('users\{user}', 'UserController@updateRegistrationForm')->name('users.update');

Route::post('register', 'Auth\RegisterController@register');

// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');

// Route::get('/home', 'HomeController@index')->name('home');

\TalvBansal\MediaManager\Routes\MediaRoutes::get();
