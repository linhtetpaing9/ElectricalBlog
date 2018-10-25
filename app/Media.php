<?php

namespace ElectricalBlog;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $table = 'media';

    public function model()
    {
        return $this->morphTo();
    }
}
