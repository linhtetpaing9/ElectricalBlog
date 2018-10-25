<?php

namespace ElectricalBlog;

use Kyawnaingtun\Tounicode\TounicodeTrait;

class Category extends Model
{
    use TounicodeTrait;

    /**
     * These are the attributes to convert before saving.
     * To covert automatically from Non-Unicode to Unicode fonts
     * @var array
     */
    protected $convertable = ['name', 'description'];
    
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

    public function videos()
    {
        return $this->belongsToMany(Video::class, 'video_categories');
    }
}
