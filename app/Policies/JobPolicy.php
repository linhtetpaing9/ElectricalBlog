<?php

namespace ElectricalBlog\Policies;

use ElectricalBlog\User;
use ElectricalBlog\Job;
use Illuminate\Auth\Access\HandlesAuthorization;

class JobPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the job.
     *
     * @param  \ElectricalBlog\User  $user
     * @param  \ElectricalBlog\Job  $job
     * @return mixed
     */
    public function view(User $user, Job $job)
    {
        return $user->id === $job->user->id;
    }

    /**
     * Determine whether the user can create jobs.
     *
     * @param  \ElectricalBlog\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->id === $job->user->id;
    }

    /**
     * Determine whether the user can update the job.
     *
     * @param  \ElectricalBlog\User  $user
     * @param  \ElectricalBlog\Job  $job
     * @return mixed
     */
    public function update(User $user, Job $job)
    {
        return $user->id === $job->user->id;
    }

    /**
     * Determine whether the user can delete the job.
     *
     * @param  \ElectricalBlog\User  $user
     * @param  \ElectricalBlog\Job  $job
     * @return mixed
     */
    public function delete(User $user, Job $job)
    {
        return $user->id === $job->user->id;
    }
}
