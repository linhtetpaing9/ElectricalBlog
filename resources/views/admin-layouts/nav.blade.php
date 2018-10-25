<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">Eletrical Blog v1.0 beta</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li class="sidebar-search">
                            <div class="input-group custom-search-form">
                                <input type="text" class="form-control" placeholder="Search...">
                                <span class="input-group-btn">
                                <button class="btn btn-default" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                            <!-- /input-group -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-wrench fa-fw"></i> User & Roles<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                <a href="{{route('roles.index')}}">Roles</a>
                                </li>
                                <li>
                                <a href="{{route('roles.create')}}">Roles Create</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>

                        <li>
                            <a href="#"><i class="fa fa-sticky-note fa-fw"></i> Posts<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                <a href="{{route('posts.index')}}">All Posts</a>
                                </li>
                                <li>
                                    <a href="{{route('posts.create')}}">Create</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-book fa-fw"></i> Books<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                <a href="{{route('books.index')}}">All Books</a>
                                </li>
                                <li>
                                    <a href="{{route('books.create')}}">Create</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fab fa-video fa-fw"></i> Videos<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                <a href="{{route('videos.index')}}">All Videos</a>
                                </li>
                                <li>
                                    <a href="{{route('videos.create')}}">Create</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-tasks fa-fw"></i> Jobs<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                <a href="{{route('jobs.index')}}">All Jobs</a>
                                </li>
                                <li>
                                    <a href="{{route('jobs.create')}}">Create</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-wrench fa-fw"></i> Categories<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                <a href="{{route('categories.index')}}">All Categories</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-wrench fa-fw"></i> FeedBack<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                <a href="{{route('feedbacks.index')}}">All Feedback</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-wrench fa-fw"></i> Issues<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                <a href="{{route('issues.index')}}">All Issues</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-trash fa-fw"></i> Bin<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                <a href="{{route('posts.trash')}}">Post Trash</a>
                                </li>
                                <li>
                                <a href="{{route('issues.trash')}}">Issue Trash</a>
                                </li>
                                <li>
                                <a href="{{route('books.trash')}}">Book Trash</a>
                                </li>
                                <li>
                                <a href="{{route('jobs.trash')}}">Job Trash</a>
                                </li>
                                <li>
                                <a href="{{route('videos.trash')}}">Video Trash</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>