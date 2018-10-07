@extends('layouts.main-page')

@section('css')
<link rel="stylesheet" href="{{ asset('css/bootstrap-wysihtml5.css')}}">
@endsection

@section('header')
<!-- Page Header -->

<header class="masthead" style="background-image: url('../img/Electrical.png')">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="site-heading">
          <h1>Posts</h1>
          <span class="subheading"></span>
        </div>
      </div>
    </div>
  </div>
</header>
@endsection

@section('content')
  <div class="col-lg-8 col-md-10 mx-auto">
    <div id="app">
        <post-searching-component></post-searching-component>
    </div>
  </div>
</section>





@endsection


@section('script')
 <script src="{{ asset('js/app.js') }}" defer></script>

   
@endsection