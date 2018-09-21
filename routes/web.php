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

Route::get('/', 'PageController@index');

Route::get('/posts/{post}', 'PostController@show')->name('posts.show');
Route::resource('/books', 'BookController');

Route::get('/categories/posts', 'PostCategoryController@index');
Route::get('/categories/{category}/posts', 'PostCategoryController@show');



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/admin', function () {
    return view('admin-layouts.admin');
});

Route::prefix('admin')->group(function () {
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

    Route::get('issues/trash', 'IssueController@trash')->name('issues.trash');

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

    Route::resource('/categories', 'CategoryController');
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

    Route::get('/categories', 'ApiController@countCategoriesByPosts');
    Route::get('/posts/{post}/issues', 'ApiController@apiIndexIssue');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

\TalvBansal\MediaManager\Routes\MediaRoutes::get();
