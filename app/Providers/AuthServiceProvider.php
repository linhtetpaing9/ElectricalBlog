<?php

namespace ElectricalBlog\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'ElectricalBlog\Post' => 'ElectricalBlog\Policies\PostPolicy',
        'ElectricalBlog\Job' => 'ElectricalBlog\Policies\JobPolicy',
        'ElectricalBlog\Video' => 'ElectricalBlog\Policies\VideoPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        Gate::resource('posts', 'ElectricalBlog\Policies\PostPolicy');
        Gate::resource('videos', 'ElectricalBlog\Policies\VideoPolicy');
        Gate::resource('jobs', 'ElectricalBlog\Policies\JobPolicy');
    }
}
