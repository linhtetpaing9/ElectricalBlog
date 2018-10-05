<?php

namespace ElectricalBlog;

class Category extends Model
{
    public function posts()
    {
        return $this->belongsToMany(Post::class, 'post_categories');
    }

    public function books()
    {
        return $this->belongsToMany(Book::class, 'book_categories');
    }

    public function jobs()
    {
        return $this->belongsToMany(Job::class, 'job_categories');
    }
}
