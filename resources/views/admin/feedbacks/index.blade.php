@extends('admin-layouts.admin')


@section('content')
<br>
<div class="row">
    <div class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">
            FeedBack
        </div>
        <div id="app" class="panel-body">
          @include('flash::message')
          <create-feed-back-component></create-feed-back-component>
        </div>
      </div>
  </div>
</div>




@endsection


@section('script')
  <script src="{{ asset('js/app.js') }}" defer></script>

  <script src="{{asset('js/select2.min.js')}}"></script>

@endsection