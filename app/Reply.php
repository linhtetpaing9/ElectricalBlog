<?php

namespace ElectricalBlog;

use Kyawnaingtun\Tounicode\TounicodeTrait;

class Reply extends Model
{
    use TounicodeTrait;

    /**
     * These are the attributes to convert before saving.
     * To covert automatically from Non-Unicode to Unicode fonts
     * @var array
     */
    protected $convertable = ['body'];
}
