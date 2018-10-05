
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand" href="index.html">{{ config('app.name') }}</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i class="fa fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/"> Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('books.book')}}"> Books</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Electrical Jobs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        @if( Auth::check() )
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{Auth::user()->name}}</a>
              <div class="dropdown-menu dropdown-menu-right scale-up">
                  <ul class="dropdown-user">
                    <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('frm-logout').submit();">
                    <i class="fa fa-power-off"></i>
                    Logout
                    </a>
                    <form id="frm-logout" action="{{ route('logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
                    </form>
                  </ul>
              </div>
          </li>
          @else
          <li class="nav-item">
            <a href="/login" class="nav-link">Login</a>
          </li>
          @endif
      </ul>
    </div>
  </div>
</nav>