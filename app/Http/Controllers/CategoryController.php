<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
use ElectricalBlog\Http\Requests\CategoryRequest;
use ElectricalBlog\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class CategoryController extends Controller
{
    public function index()
    {
        return view('admin.categories.index');
    }

    public function store(CategoryRequest $request)
    {
        flash('Category is created !')->success()->important();
        // dd($request);
        $category = Category::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);
        return Redirect::route('categories.index');
    }

    public function destroy(Category $category)
    {
        flash('Category is Deleted !')->error()->important();
        $category->delete();
    }
}
