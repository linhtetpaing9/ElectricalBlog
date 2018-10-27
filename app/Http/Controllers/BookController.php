<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Book;
use ElectricalBlog\Category;
use ElectricalBlog\Http\Requests\BookRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class BookController extends Controller
{
    public function index()
    {
        return view('admin.books.index');
    }

    public function create()
    {
        $categories = Category::pluck('name', 'id');
        return view('admin.books.create', compact('categories'));
    }

    public function edit(Book $book)
    {
        $existBookCategoryId = [];
        foreach ($book->categories as $category) {
            $existBookCategoryId[$category->id] = $category->name;
        }
        $categories = Category::pluck('name', 'id');
        return view('admin.books.edit', compact('book', 'categories', 'existBookCategoryId'));
    }

    public function show(Book $book)
    {
        return view('books.show', compact('book'));
    }

    public function update(BookRequest $request, Book $book)
    {
        flash('Book is edited !')->info()->important();
        // dd($request);
        $book->update([
            'book_name' => $request->book_name,
            'book_link' => $request->book_link,
            'book_image' => $request->page_image ?? '',
            'author' => $request->author ?? '',
            'storage_provider_name' => $request->storage_provider_name ?? '',
            'review' => $request->review ?? '',
        ]);
        $book->categories()->sync($request->categories);
        return Redirect::route('books.index');
    }

    public function store(BookRequest $request)
    {
        flash('Book is created !')->success()->important();
        // dd($request);
        $book = Book::create([
            'book_name' => $request->book_name,
            'book_link' => $request->book_link,
            'book_image' => $request->page_image ?? '',
            'author' => $request->author ?? '',
            'storage_provider_name' => $request->storage_provider_name ?? '',
            'review' => $request->review ?? '',
        ]);
        $book->categories()->sync($request->categories);
        return Redirect::route('books.index');
    }

    public function destroy(Book $book)
    {
        flash('Book is Deleted, You can recovery the book from bin !')->error()->important();

        $book->delete();
        return Redirect::route('books.index');
    }

    public function trash()
    {
        return view('admin.books.trash');
    }

    public function restore(Book $book)
    {
        flash('Book is Restored !')->success()->important();

        $book->restore();
        return Redirect::route('books.trash');
    }

    public function forceDelete(Book $book)
    {
        flash('Book is Permanently Deleted !')->error()->important();

        // dd($book);
        $book->forceDelete();
        return Redirect::route('books.trash');
    }
}
