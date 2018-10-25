
<!DOCTYPE html>
<html lang="en">

  <head>

    @include('layouts.meta')

    @include('layouts.css')

  </head>

  <body>
    
    @include('layouts.nav')


    @yield('header')
    <!-- Main Content -->
    <div class="container">
      <div class="row">
        
          @yield('content')
          

      </div>
    </div>

    <hr>

    @include('layouts.footer')
   
    @include('layouts.script')
    <a href="#" class="scrollToTop"><span class="fa fa-arrow-up"></span></a>

  </body>

</html>
