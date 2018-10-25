<?php

namespace ElectricalBlog\Policies;

use ElectricalBlog\User;
use ElectricalBlog\Video;
use Illuminate\Auth\Access\HandlesAuthorization;

class VideoPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the video.
     *
     * @param  \ElectricalBlog\User  $user
     * @param  \ElectricalBlog\Video  $video
     * @return mixed
     */
    public function view(User $user, Video $video)
    {
        return $user->id === $video->user->id;
    }

    /**
     * Determine whether the user can create videos.
     *
     * @param  \ElectricalBlog\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->id === $video->user->id;
    }

    /**
     * Determine whether the user can update the video.
     *
     * @param  \ElectricalBlog\User  $user
     * @param  \ElectricalBlog\Video  $video
     * @return mixed
     */
    public function update(User $user, Video $video)
    {
        return $user->id === $video->user->id;
    }

    /**
     * Determine whether the user can delete the video.
     *
     * @param  \ElectricalBlog\User  $user
     * @param  \ElectricalBlog\Video  $video
     * @return mixed
     */
    public function delete(User $user, Video $video)
    {
        return $user->id === $video->user->id;
    }
}
