<?php

namespace ElectricalBlog\Filters;

class BookFilters extends Filters
{
    protected $filters = [
        'book_name'
    ];
    
    public function book_name($book_name)
    {
        $keywords = preg_split("/[\s,]+/", tounicode($book_name));
        return $this->builder->where(function ($query) use ($keywords) {
            foreach ($keywords as $keyword) {
                $query->where('book_name', 'LIKE', "%{$keyword}%");
            }
        });
    }
}
