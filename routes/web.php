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

Route::get('/api/posts', 'PostController@apiIndexPost');
Route::get('/api/posts/{post}/issues', 'IssueController@apiIndexIssue');
Route::post('/posts/{post}/issues', 'IssueController@store');

Route::get('/posts/create', 'PostController@create')->name('posts.create');
Route::get('/posts/{post}/edit', 'PostController@edit')->name('posts.edit');
Route::delete('/posts/{post}', 'PostController@destroy')->name('posts.destroy');
Route::patch('/posts/{post}', 'PostController@update')->name('posts.update');
Route::post('/posts', 'PostController@store')->name('posts.store');
Route::get('/posts/{post}', 'PostController@show')->name('posts.show');
Route::get('/posts/{post}/issues/create', 'IssueController@create')->name('posts.issues.create');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
