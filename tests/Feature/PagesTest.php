<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * Post Set Up for Testing
     * * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $this->post = factory('ElectricalBlog\Post')->create();
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_a_user_can_read_posts()
    {
        $this->get('/api/posts')
            ->assertSee($this->post->title);
    }

    public function test_a_user_can_read_a_single_post()
    {
        $this->get('/posts/' . $this->post->id)
        ->assertStatus(200);
    }

    public function test_a_user_can_wirte_issue_associate_in_post()
    {
        $issue = factory('ElectricalBlog\Issue')
                ->create(['post_id' => $this->post->id]);
        $this->get('/posts/' . $this->post->id)
        ->assertStatus(200);
    }
    

}
