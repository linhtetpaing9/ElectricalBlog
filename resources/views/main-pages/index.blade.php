@extends('layouts.master')

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
          <h1>{{ config('app.name') }}</h1>
          <span class="subheading">Your Electrical Career Personal Guide</span>
        </div>
      </div>
    </div>
  </div>
</header>
@endsection

@section('content')

<div class="col-lg-8 col-md-10 mx-auto">
  <div id="app">
      <posts-searching></posts-searching>
  </div>
</div>

@endsection


@section('script')
 <script src="{{ asset('js/app.js') }}" defer></script>
@endsection