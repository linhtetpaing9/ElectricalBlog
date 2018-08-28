<?php

namespace ElectricalBlog;

class Post extends Model
{
  



    public function issues()
    {
        return $this->hasMany(Issue::class);
    }
}
