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
Route::get('/books', 'PageController@book')->name('books.book');

Route::get('/posts/{post}', 'PostController@show')->name('posts.show');

Route::get('/categories/{category}/posts', 'PostCategoryController@show');



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

    Route::resource('/posts', 'PostController')->except(['show', 'edit']);

    Route::get('/posts/{post}', 'PostController@edit')->name('posts.edit');

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

    Route::resource('/books', 'BookController');

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

    Route::resource('/jobs', 'JobController');

    //Reply
    Route::resource('/replies', 'ReplyController');

    //Recommend
    Route::post('/recommends', 'RecommendController@store')->name('recommends.store');

    //User
    Route::get('/users', function () {
        return Auth::user();
    });
});


Route::prefix('api')->group(function () {
    Route::get('/posts/datatable', 'ApiController@postDatatable')
    ->name('api.posts.datatable');
    Route::get('/posts/trash/datatable', 'ApiController@postTrashDatatable')
    ->name('api.posts.trash.datatable');
    Route::get('/issues/datatable', 'ApiController@IssueDatatable')
    ->name('api.issues.datatable');
    Route::get('/issues/trash/datatable', 'ApiController@IssueTrashDatatable')
    ->name('api.issues.trash.datatable');
    Route::get('/categories/posts', 'ApiController@searchPostsByCategories');
    Route::get('/categories', 'ApiController@countCategoriesByPosts');
    Route::get('/posts/{post}/issues/replies', 'ApiController@postIndex');
    Route::get('/books/datatable', 'ApiController@bookDatatable')
    ->name('api.books.datatable');
    Route::get('/books/trash/datatable', 'ApiController@BookTrashDatatable')
    ->name('api.books.trash.datatable');
    Route::get('/jobs/datatable', 'ApiController@jobDatatable')
    ->name('api.jobs.datatable');
    Route::get('/jobs/trash/datatable', 'ApiController@JobTrashDatatable')
    ->name('api.jobs.trash.datatable');
});

// Authentication Routes...
$this->get('login', 'Auth\LoginController@showLoginForm')->name('login');
$this->post('login', 'Auth\LoginController@login');
$this->post('logout', 'Auth\LoginController@logout')->name('logout');

// Route::get('/home', 'HomeController@index')->name('home');

\TalvBansal\MediaManager\Routes\MediaRoutes::get();
