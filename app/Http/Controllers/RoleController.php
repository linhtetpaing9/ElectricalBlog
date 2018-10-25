<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Http\Requests\RoleForm;
use ElectricalBlog\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Role::all();
        return view('admin.roles.index', compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.roles.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ElectricalBlog\Http\Requests\RoleForm  $form
     * @return \Illuminate\Http\Response
     */
    public function store(RoleForm $form)
    {
        $form->persist();
        return redirect()->route('roles.index');
    }
}
