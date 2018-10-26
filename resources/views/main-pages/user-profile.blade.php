@extends('layouts.main-page')

@section('css')
<style>

a:hover, a:visited, a:link, a:active
{
    text-decoration: none;
}

body {
  background: #F1F3FA;
}

/* Profile container */
.profile {
  margin: 20px 0;
}

/* Profile sidebar */
.profile-sidebar {
  padding: 20px 0 10px 0;
  background: #fff;
}

.profile-userpic img {
  float: none;
  display: block;
  margin: 0 auto;
  width: 50%;
  height: 50%;
  -webkit-border-radius: 50% !important;
  -moz-border-radius: 50% !important;
  border-radius: 50% !important;
}

.profile-usertitle {
  text-align: center;
  margin-top: 20px;
}

.profile-usertitle-name {
  color: #5a7391;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 7px;
}

.profile-usertitle-job {
  text-transform: uppercase;
  color: #5b9bd1;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
}

.profile-userbuttons {
  text-align: center;
  margin-top: 10px;
}

.profile-userbuttons .btn {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  padding: 6px 15px;
  margin-right: 5px;
}

.profile-userbuttons .btn:last-child {
  margin-right: 0px;
}
    
.profile-usermenu {
  margin-top: 30px;
}

.profile-usermenu ul li {
  border-bottom: 1px solid #f0f4f7;
}

.profile-usermenu ul li:last-child {
  border-bottom: none;
}

.profile-usermenu ul li a {
  color: #93a3b5;
  font-size: 14px;
  font-weight: 400;
}

.profile-usermenu ul li a i {
  margin-right: 8px;
  font-size: 14px;
}

.profile-usermenu ul li a:hover {
  background-color: #fafcfd;
  color: #5b9bd1;
}

.profile-usermenu ul li.active {
  border-bottom: none;
}

.profile-usermenu ul li.active a {
  color: #5b9bd1;
  background-color: #f6f9fb;
  border-left: 2px solid #5b9bd1;
  margin-left: -2px;
}



/* Profile Content */
.profile-content {
  padding: 20px;
  background: #fff;
  min-height: 460px;
}

.small-button{
  padding: 5px 8px 5px 8px;
}
</style>
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
<div class="col-md-3">
  <div class="profile-sidebar">

    <div class="profile-userpic">
      {{-- {{$user->meida}} --}}

      @if($user->media()->first() !== null)
      <img src="{{asset('storage')}}/{{$user->media()->first()->id}}/{{$user->media()->first()->file_name}}" class="img-responsive center-block">
      @endif
    </div>
      <div class="profile-usertitle">
        <div class="profile-usertitle-name">

          {{$user->name}}
        </div>
        <div class="profile-usertitle-job">
          {{$user->email}}
        </div>
      </div>
      <div class="profile-userbuttons">
        <button type="button" class="btn btn-success btn-sm">Follow</button>
        <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#feedbackSubmit">Feedback</button>
      </div>
      <!-- Modal -->
    <div class="modal fade" id="feedbackSubmit" tabindex="-1" role="dialog" aria-labelledby="feedbackSubmitTitle" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"> လိုအပ်ချက်များပေးပို့ရန်</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="{{route('feedbacks.feedback')}}" method="POST">
              @csrf
              <div class="form-body">
                <label for="title">အကြောင်းအရာ</label>
                <input type="text" class="form-control" name="title">
              </div>
              <div class="form-body">
                <label for="body">အသေးစိတ်အချက်အလက်</label>
                <textarea name="body" class="form-control" ></textarea>
              </div>
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">ပိတ်မည်</button>
            <button type="submit" class="btn btn-primary">ပေးပို့မည်</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    </div>
  </div>
  <div class="col-md-9">
      <div class="profile-content">
       <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Activities</a>
      </li>
      @if(Auth::check())
        @if(Auth::user()->is_admin)
      <li class="nav-item">
        <a class="nav-link" id="pills-setting-tab" data-toggle="pill" href="#pills-setting" role="tab" aria-controls="pills-setting" aria-selected="false">Setting</a>
      </li>
        @endif
      @endif
      <li class="nav-item">
        <a class="nav-link" id="pills-bookmark-tab" data-toggle="pill" href="#pills-bookmark" role="tab" aria-controls="pills-bookmark" aria-selected="false">FeedBack</a>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        @include('users.homepage')
      </div>
      @if(Auth::check())
        @if(Auth::user()->is_admin)
      <div class="tab-pane fade" id="pills-setting" role="tabpanel" aria-labelledby="pills-setting-tab">
        @include('users.setting')
      </div>
        @endif
      @endif
      <div class="tab-pane fade" id="pills-bookmark" role="tabpanel" aria-labelledby="pills-bookmark-tab">
        @include('users.feedback')
      </div>
    </div>
  </div>
</div>
<center>

</center>
<br>
<br>


@endsection


@section('script')
 <script src="{{ asset('js/app.js') }}" defer></script>

@endsection