<?php

use ElectricalBlog\Role;
use ElectricalBlog\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Lin Htet Paing',
            'email' => 'linhtetpaing9@gmail.com',
            'password' => Hash::make('linhtet12345'),
            'is_admin' => true
        ]);

        Role::create([
            'name' => 'AdminPost',
            'permissions' => [
                'view' => true,
                'create' => true,
                'update' => true,
                'delete' => true,
            ],
            'policy_type' => 'ElectricalBlog\Post',
        ]);

        Role::create([
            'name' => 'AdminJob',
            'permissions' => [
                'view' => true,
                'create' => true,
                'update' => true,
                'delete' => true,
            ],
            'policy_type' => 'ElectricalBlog\Job',
        ]);

        Role::create([
            'name' => 'AdminVideo',
            'permissions' => [
                'view' => true,
                'create' => true,
                'update' => true,
                'delete' => true,
            ],
            'policy_type' => 'ElectricalBlog\Video',
        ]);

        Role::create([
            'name' => 'AdminBook',
            'permissions' => [
                'view' => true,
                'create' => true,
                'update' => true,
                'delete' => true,
            ],
            'policy_type' => 'ElectricalBlog\Book',
        ]);
        $user->roles()->attach([1,2,3,4]);
    }
}
