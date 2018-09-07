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
// Route::get('/api/posts', 'ApiController@apiIndexPost');



// Route::get('/posts/create', 'PostController@create')->name('posts.create');
// Route::get('/posts/{post}/edit', 'PostController@edit')->name('posts.edit');
// Route::delete('/posts/{post}', 'PostController@destroy')->name('posts.destroy');
// Route::patch('/posts/{post}', 'PostController@update')->name('posts.update');
// Route::post('/posts', 'PostController@store')->name('posts.store');
// Route::get('/posts/{post}', 'PostController@show')->name('posts.show');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/admin', function () {
    return view('admin-layouts.admin');
});
