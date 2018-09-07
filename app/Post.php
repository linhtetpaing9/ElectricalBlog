<?php

namespace ElectricalBlog;

class Post extends Model
{
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'post_categories');
    }
    
    public function issues()
    {
        return $this->hasMany(Issue::class);
    }

    public function scopeFilter($query, $filters)
    {
        // dd($query);
        $filters->apply($query);
    }
}
