<?php

namespace ElectricalBlog\Http\Controllers;

use ElectricalBlog\Http\Requests\ReplyRequest;
use ElectricalBlog\Issue;
use ElectricalBlog\Reply;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    public function store(ReplyRequest $request)
    {
        Reply::create([
            'user_id' => 1,
            'issue_id' => $request->issue_id,
            'body' => $request->body,
        ]);
    }
}
