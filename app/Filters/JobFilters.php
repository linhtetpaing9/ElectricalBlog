<?php

namespace ElectricalBlog\Filters;

class JobFilters extends Filters
{
    protected $filters = [
        'title'
    ];
    
    public function title($title)
    {
        $keywords = preg_split("/[\s,]+/", tounicode($title));
        return $this->builder->where(function ($query) use ($keywords) {
            foreach ($keywords as $keyword) {
                $query->where('title', 'LIKE', "%{$keyword}%");
            }
        });
    }
}
