<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(ElectricalBlog\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
    ];
});


$factory->define(ElectricalBlog\Post::class, function (Faker $faker) {
    return [
        'user_id' => function (){
        	return factory('ElectricalBlog\User')->create()->id;
        },
        'title' => $faker->sentence,
        'body' => $faker->realText($maxNbChars = 10000, $indexSize = 2),
    ];
});

$factory->define(ElectricalBlog\Issue::class, function (Faker $faker) {
    return [
    	'post_id' => function (){
        	return factory('ElectricalBlog\Post')->create()->id;
        },
        'user_id' => function (){
        	return factory('ElectricalBlog\User')->create()->id;
        },

        'title' => $faker->sentence,
        'body' => $faker->realText($maxNbChars = 1000, $indexSize = 2),
    ];
});


$factory->define(ElectricalBlog\Reply::class, function (Faker $faker) {
    return [
    	'issue_id' => function (){
        	return factory('ElectricalBlog\Issue')->create()->id;
        },
        'user_id' => function (){
        	return factory('ElectricalBlog\User')->create()->id;
        },
        'body' => $faker->realText($maxNbChars = 1000, $indexSize = 2),
    ];
});