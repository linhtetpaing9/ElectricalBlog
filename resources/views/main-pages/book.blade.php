@extends('layouts.main-page')

@section('css')
@endsection

@section('header')
<!-- Page Header -->
<header class="masthead" style="background-image: url('img/Electrical.png')">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="site-heading">
          <h1>Books</h1>
          <span class="subheading" id="quoteDisplay"></span>
        </div>
      </div>
    </div>
  </div>
</header>
@endsection

@section('content')
<div id="app" class="row">
  <div class="col-lg-8 col-md-9">
      <h1 class="text-info" style="text-align: center;">စုစုပေါင်း {{numformat($books_count)}} စာအုပ်</h1>

      <book-searching-component ></book-searching-component>
  </div>
  <div class="col-lg-4 col-md-3 mx-auto">
      <book-category-component></book-category-component>
  </div>
</div>

@endsection


@section('script')
 <script src="{{ asset('js/app.js') }}" defer></script>
 <script src="{{ asset('js/quotes.js') }}"></script>
@endsection