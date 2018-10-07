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
          <h1>{{ config('app.name') }}</h1>
          <span class="subheading">Your Electrical Career Personal Guide</span>
        </div>
      </div>
    </div>
  </div>
</header>
@endsection

@section('content')
<div id="app" class="row">
  <div class="col-lg-8 col-md-10">
      <h1 class="text-info" style="text-align: center;">စုစုပေါင်း {{numformat($post_count)}} ပိုစ့်</h1>

      <post-searching-component ></post-searching-component>
  </div>
  <div class="col-lg-4 col-md-2 mx-auto">
      <post-category-component></post-category-component>
  </div>
</div>

@endsection


@section('script')
 <script src="{{ asset('js/app.js') }}" defer></script>
<script src="https://unpkg.com/rabbit-node@1.0.3/dist/rabbit.min.js"></script>
@endsection