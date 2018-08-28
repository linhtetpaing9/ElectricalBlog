<?php

namespace ElectricalBlog;

use ElectricalBlog\Post;

class Issue extends Model
{
    public function post()
    {
    	return $this->belongsTo( Post::class )->withDefault();
    }
}
