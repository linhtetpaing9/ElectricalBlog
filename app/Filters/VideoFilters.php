<?php

namespace ElectricalBlog\Filters;

class VideoFilters extends Filters
{
    protected $filters = [
        'name'
    ];
    
    public function name($name)
    {
        $keywords = preg_split("/[\s,]+/", tounicode($name));
        return $this->builder->where(function ($query) use ($keywords) {
            foreach ($keywords as $keyword) {
                $query->where('name', 'LIKE', "%{$keyword}%");
            }
        });
    }
}
