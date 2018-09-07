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

Route::get('/', 'PageController@index')->name('posts.index');


Route::post('/posts/{post}/issues', 'IssueController@store');
Route::get('/posts/{post}/issues/create', 'IssueController@create')->name('posts.issues.create');

Route::resource('/posts', 'PostController');
Route::get('/categories/posts', 'PostCategoryController@index');
Route::get('/categories/{category}/posts', 'PostCategoryController@show');

Route::get('/api/categories', 'ApiController@countCategoriesByPosts');
Route::get('/api/posts/{post}/issues', 'ApiController@apiIndexIssue');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/admin', function () {
    return view('admin-layouts.admin');
});

Route::prefix('admin')->group(function () {
    Route::get('/posts/create', 'AdminPostController@create')->name('admin.posts.create');
    Route::get('/posts', 'AdminPostController@index')->name('admin.posts.index');
});
