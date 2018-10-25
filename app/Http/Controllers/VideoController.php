<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Category;
use ElectricalBlog\Http\Requests\VideoRequest;
use ElectricalBlog\Video;
use Illuminate\Support\Facades\Redirect;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.videos.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::pluck('name', 'id');
        return view('admin.videos.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(VideoRequest $request)
    {
        flash('Video is created !')->success()->important();
        // dd($request);
        $video = Video::create([
            'name' => $request->name,
            'description' => $request->description,
            'embed_link' => $request->embed_link,
            'video_service_provider' => $request->video_service_provider,
        ]);
        $video->categories()->sync($request->categories);
        return Redirect::route('videos.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \ElectricalBlog\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function show(Video $video)
    {
        return view('videos.show', compact('video'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \ElectricalBlog\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function edit(Video $video)
    {
        $existVideoCategoryId = [];
        foreach ($video->categories as $category) {
            $existVideoCategoryId[$category->id] = $category->name;
        }
        $categories = Category::pluck('name', 'id');

        return view('admin.videos.edit', compact('video', 'categories', 'existVideoCategoryId'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \ElectricalBlog\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function update(VideoRequest $request, Video $video)
    {
        flash('Video is Edited !')->info()->important();
        // dd($request->readable_time);
        $video->update([
            'name' => $request->name,
            'description' => $request->description,
            'video_service_provider' => $request->video_service_provider,
            'embed_link' => $request->embed_link,
        ]);
        $video->categories()->sync($request->categories);

        return Redirect::route('videos.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Video  $video
     * @return \Illuminate\Http\Response
     */
    public function destroy(Video $video)
    {
        flash('Video is Deleted, You can recovery the video from bin !')->error()->important();
        $video->delete();
        return Redirect::route('videos.index');
    }

    public function trash()
    {
        return view('admin.videos.trash');
    }

    public function restore(VideoRequest $request, Video $video)
    {
        flash('Video is Restored !')->success()->important();
        $video->restore();
        return Redirect::route('videos.trash');
    }

    public function forceDelete(VideoRequest $request, Video $video)
    {
        flash('Video is Permanently Deleted !')->error()->important();
        $video->forceDelete();
        return Redirect::route('videos.trash');
    }
}
