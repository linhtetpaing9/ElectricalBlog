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
	'resources/assets/js/jquery.min.js',
	'resources/assets/js/bootstrap-3/bootstrap.bundle.min.js',
	'resources/assets/js/theme/clean-blog.min.js',
	], 'public/js/main-page.js');

mix.styles([
	'resources/assets/css/bootstrap-3/bootstrap.min.css',
	'resources/assets/css/font-awesome/font-awesome.min.css',
	'resources/assets/css/theme/clean-blog.min.css'
	], 'public/css/main-page.css');

mix.scripts([
	'resources/assets/vendor/jquery/jquery.min.js',
	'resources/assets/vendor/bootstrap/js/bootstrap.min.js',
	'resources/assets/vendor/metisMenu/metisMenu.min.js',
	'resources/assets/vendor/raphael/raphael.min.js',
	'resources/assets/vendor/morrisjs/morris.min.js',
	'resources/assets/data/morris-data.js',
	'resources/assets/vendor/datatables/js/jquery.dataTables.min.js',
	'resources/assets/vendor/datatables-plugins/dataTables.bootstrap.min.js',
	'resources/assets/vendor/datatables-responsive/dataTables.responsive.js',
	'resources/assets/dist/js/sb-admin-2.js',
	], 'public/js/admin.js');

mix.styles([
	'resources/assets/vendor/bootstrap/css/bootstrap.min.css',
	'resources/assets/vendor/metisMenu/metisMenu.min.css',
	'resources/assets/dist/css/sb-admin-2.css',
	'resources/assets/vendor/morrisjs/morris.css',
	'resources/assets/vendor/font-awesome/css/font-awesome.min.css',
	'resources/assets/vendor/datatables-responsive/dataTables.responsive.css',
	], 'public/css/admin.css');