@extends('layouts.main-page')

@section('css')
<link rel="stylesheet" type="text/css" href="{{ asset('css/sweetalert.min.css') }}">

@endsection

@section('header')
<!-- Page Header -->
<header class="masthead" style="background-image: url('../img/Electrical.png')">
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

<div class="col-lg-10 col-md-12 mx-auto">
  <article>
    @if(Auth::check())
      @if(Auth::user()->is_admin)
    <div class="row">
      <a href="{{route('books.edit', $book->id)}}" class="btn btn-info text-white"><i class="fa fa-edit">Edit Book</i></a>
    </div>
      @endif
    @endif
      <div id="app">
          <book-show-component></book-show-component>
      </div>

  </article>
</div>

@endsection


@section('script')
 <script src="{{ asset('js/app.js') }}" defer></script>
 <script src="{{ asset('js/sweetalert.min.js') }}"></script>
 <script>
   function archiveFunction() {
      event.preventDefault(); // prevent form submit
      var form = event.target.form; // storing the form
      swal({
        title: "Are you sure to Delete?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, cancel please!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm){
        if (isConfirm) {
          form.submit();          // submitting the form when user press yes
        } else {
          swal("Cancelled", "Your Post is safe :)", "error");
        }
      });
    }
 </script>
@endsection