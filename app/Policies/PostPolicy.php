<?php

namespace ElectricalBlog\Policies;

use ElectricalBlog\User;
use ElectricalBlog\Post;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the post.
     *
     * @param  \ElectricalBlog\User  $user
     * @param  \ElectricalBlog\Post  $post
     * @return mixed
     */
    public function view(User $user, Post $post)
    {
        return $user->id === $post->user->id;
    }

    /**
     * Determine whether the user can create posts.
     *
     * @param  \ElectricalBlog\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->id === $post->user->id;
    }

    /**
     * Determine whether the user can update the post.
     *
     * @param  \ElectricalBlog\User  $user
     * @param  \ElectricalBlog\Post  $post
     * @return mixed
     */
    public function update(User $user, Post $post)
    {
        return $user->id === $post->user->id;
    }

    /**
     * Determine whether the user can delete the post.
     *
     * @param  \ElectricalBlog\User  $user
     * @param  \ElectricalBlog\Post  $post
     * @return mixed
     */
    public function delete(User $user, Post $post)
    {
        return $user->id === $post->user->id;
    }
}
