<?php

namespace ElectricalBlog\Providers;

use ElectricalBlog\Book;
use ElectricalBlog\Issue;
use ElectricalBlog\Job;
use ElectricalBlog\Post;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;
use ElectricalBlog\Video;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'ElectricalBlog\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();

        Route::bind('trashed_post', function ($id) {
            return Post::onlyTrashed()->findOrFail($id);
        });
        Route::bind('trashed_issue', function ($id) {
            return Issue::onlyTrashed()->findOrFail($id);
        });

        Route::bind('trashed_book', function ($id) {
            return Book::onlyTrashed()->findOrFail($id);
        });

        Route::bind('trashed_job', function ($id) {
            return Job::onlyTrashed()->findOrFail($id);
        });

        Route::bind('trashed_video', function ($id) {
            return Video::onlyTrashed()->findOrFail($id);
        });
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('api')
             ->namespace($this->namespace)
             ->group(base_path('routes/api.php'));
    }
}
