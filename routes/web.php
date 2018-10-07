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
Route::get('/contact', 'PageController@contact')->name('contacts.contact');
Route::get('/books', 'PageController@book')->name('books.book');
Route::get('/posts', 'PageController@post')->name('posts.post');
Route::get('/jobs', 'PageController@job')->name('jobs.job');
Route::get('/videos', 'PageController@video')->name('videos.video');

Route::get('/posts/{post}', 'PostController@show')->name('posts.show');
Route::get('/books/{book}', 'BookController@show')->name('books.show');
Route::get('/jobs/{job}', 'JobController@show')->name('jobs.show');

Route::get('/categories/{category}/posts', 'PostCategoryController@show');
Route::get('/categories/{category}/jobs', 'JobCategoryController@show');



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/admin', function () {
    return view('admin-layouts.admin');
});

Route::prefix('admin')->group(function () {
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

    //Reply
    Route::resource('/replies', 'ReplyController');

    //Recommend
    Route::post('/recommends', 'RecommendController@store')->name('recommends.store');
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
    Route::get('/issues/datatable', 'ApiController@IssueDatatable')
    ->name('api.issues.datatable');
    Route::get('/issues/trash/datatable', 'ApiController@IssueTrashDatatable')
    ->name('api.issues.trash.datatable');
    //Category
    Route::get('/categories/posts', 'ApiController@countCategoriesByPosts');
    Route::get('/categories/jobs', 'ApiController@countCategoriesByJobs');
    Route::get('/categories', 'ApiController@categories');

    //Book
    Route::get('/books/datatable', 'ApiController@bookDatatable')
    ->name('api.books.datatable');
    Route::get('/books/trash/datatable', 'ApiController@BookTrashDatatable')
    ->name('api.books.trash.datatable');
    Route::get('/books/{book}', 'ApiController@bookIndex');
    //Job
    Route::get('/jobs/datatable', 'ApiController@jobDatatable')
    ->name('api.jobs.datatable');
    Route::get('/jobs/trash/datatable', 'ApiController@JobTrashDatatable')
    ->name('api.jobs.trash.datatable');
    Route::get('/jobs/categories', 'ApiController@searchjobsByCategories');
    Route::get('/jobs/{job}', 'ApiController@jobIndex');
    //User
    Route::get('/isCurrentUsers', function () {
        return Auth::user();
    });
});

// Authentication Routes...
$this->get('login', 'Auth\LoginController@showLoginForm')->name('login');
$this->post('login', 'Auth\LoginController@login');
$this->post('logout', 'Auth\LoginController@logout')->name('logout');

// Route::get('/home', 'HomeController@index')->name('home');

\TalvBansal\MediaManager\Routes\MediaRoutes::get();
