<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
use Illuminate\Http\Request;

class JobCategoryController extends Controller
{
    public function show(Category $category)
    {
        return $category->jobs->load('categories');
    }
}
