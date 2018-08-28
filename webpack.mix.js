let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/script/app.js', 'public/js');


mix.scripts([
	'resources/assets/js/jquery-3.3.1/jquery.min.js',
	'resources/assets/js/bootstrap-3/bootstrap.bundle.min.js',
	'resources/assets/js/theme/clean-blog.min.js',
	], 'public/js/master.js');

mix.styles([
	'resources/assets/css/bootstrap-3/bootstrap.min.css',
	'resources/assets/css/font-awesome/font-awesome.min.css',
	'resources/assets/css/theme/clean-blog.min.css'
	], 'public/css/master.css');
