<?php

namespace ElectricalBlog;

class Recommend extends Model
{
    public function recommendable()
    {
        return $this->morphTo();
    }
}
