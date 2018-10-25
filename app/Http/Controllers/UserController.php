<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function updateRegistrationForm(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6|confirmed',
        ]);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password
        ]);
        return redirect()->back();
    }
}
