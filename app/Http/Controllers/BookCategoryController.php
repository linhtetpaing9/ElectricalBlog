<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
use Illuminate\Http\Request;

class BookCategoryController extends Controller
{
    public function show(Category $category)
    {
        return $category->books->load('categories');
    }
}
