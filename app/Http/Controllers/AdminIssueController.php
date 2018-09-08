<?php

namespace ElectricalBlog\Http\Controllers;

use Illuminate\Http\Request;

class AdminIssueController extends Controller
{
    public function index()
    {
        return view('admin.issues.index');
    }
}
