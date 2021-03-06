<?php

namespace ElectricalBlog\Http\Controllers\Auth;

use ElectricalBlog\Http\Controllers\Controller;
use ElectricalBlog\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            // 'avatar' => 'mimes:jpeg,jpg,png | max:2000'
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \ElectricalBlog\User
     */
    protected function create(array $data)
    {
        // dd($data);
        $data['slug'] = str_slug($data['name'], "-") . "-" . uniqid();
        // dd($data['slug']);
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'slug' => $data['slug']
        ]);
        
        // if (isset($data['avatar'])) {
        //     $user->addMediaFromRequest('avatar')->toMediaCollection('avatars');
        // }

        return $user;
    }
}
