
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand" href="/">MMelectrical</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i class="fa fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/"> ပင်မစာမျက်နှာ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('posts.post')}}"> ပိုစ့်များ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('books.book')}}"> စာအုပ်</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('jobs.job')}}"> အလုပ်အကိုင်များ</a>
        </li>
       <li class="nav-item">
          <a class="nav-link" href="{{route('videos.video')}}"> ဗီဒီယို</a>
        </li>
        {{-- <li class="nav-item">
          <a class="nav-link" href="{{route('contacts.contact')}}">ကျွန်တော်တို့အကြောင်း</a>
        </li> --}}
        
        @if( Auth::check() )
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User</a>
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
                  <ul class="dropdown-user">
                    <a href="/users/{{Auth::user()->slug}}" >
                    <i class="fa fa-cog"></i>
                    Setting
                    </a>
                    
                  </ul>
              </div>
          </li>
          @else
          <li class="nav-item">
            <a href="/login" class="nav-link" ><i class="fa fa-sign-in text-info"></i>Sign In</a>
          </li>
          <li class="nav-item">
            <a href="/register" class="nav-link" ><i class="fa fa-registered text-info"></i>Sign Up</a>
          </li>
          @endif
      </ul>
    </div>
  </div>
</nav>