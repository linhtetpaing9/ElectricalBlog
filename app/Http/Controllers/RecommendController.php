<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Recommend;
use Illuminate\Http\Request;

class RecommendController extends Controller
{
    public function store(Request $request)
    {
        // dd($request);
        
        if (!$request->recommendable) {
            $recommend = Recommend::wherePostId((int)$request->post_id)
                                ->whereUserId($request->user_id)->first();
            $recommend->delete();
        } else {
            Recommend::UpdateOrCreate([
            'post_id' => (int)$request->post_id,
            'user_id' => $request->user_id,
            ]);
        }
    }
}
