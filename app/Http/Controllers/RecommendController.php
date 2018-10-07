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
            $recommend = Recommend::whereRecommendableId((int)$request->recommendable_id)
                                ->whereUserId($request->user_id)
                                ->whereRecommendableType($request->recommendable_type)->first();
            $recommend->delete();
        } else {
            Recommend::UpdateOrCreate([
            'recommendable_id' => (int)$request->recommendable_id,
            'user_id' => $request->user_id,
            'recommendable_type' => $request->recommendable_type,
            ]);
        }
    }
}
