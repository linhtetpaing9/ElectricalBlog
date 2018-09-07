<?php

namespace ElectricalBlog\Filters;

class PostFilters extends Filters
{
    protected $filters = [
        'category_id'
    ];

    public function category_id($category_id)
    {
        return $this->builder->where('category_id', '=', $category_id);
        // dd($this->builder);
    }
}
