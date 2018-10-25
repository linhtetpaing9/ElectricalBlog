<?php

namespace ElectricalBlog\Filters;

class PostFilters extends Filters
{
    protected $filters = [
        'title'
    ];
    
    public function title($title)
    {
        // dd($title);
        $keywords = preg_split("/[\s,]+/", tounicode($title));
        // dd($keywords);
        return $this->builder->where(function ($query) use ($keywords) {
            // dd($query);
            foreach ($keywords as $keyword) {
                // dd($keyword);
                $query->where('title', 'LIKE', "%{$keyword}%");
            }
        });
    }
}
