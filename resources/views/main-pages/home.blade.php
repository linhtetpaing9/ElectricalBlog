@extends('layouts.main-page')

@section('css')
{{-- <link rel="stylesheet" href="https://cdn.plyr.io/3.4.4/plyr.css"> --}}
<style>
section{
  padding: 60px 0;
}
section .section-title{
  text-align:center;
  color:#17a2b8;
  margin-bottom:50px;
  text-transform:uppercase;
}
#what-we-do{
  background:#ffffff;
}
#what-we-do .card{
  padding: 1rem!important;
  border: none;
  margin-bottom:1rem;
  -webkit-transition: .5s all ease;
  -moz-transition: .5s all ease;
  transition: .5s all ease;
}
#what-we-do .card:hover{
  -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}
#what-we-do .card .card-block{
  padding-left: 50px;
    position: relative;
}
#what-we-do .card .card-block a{
  color: #17a2b8 !important;
  font-weight:700;
  text-decoration:none;
}
#what-we-do .card .card-block a i{
  display:none;
  
}
#what-we-do .card:hover .card-block a i{
  display:inline-block;
  font-weight:700;
  
}
#what-we-do .card .card-block:before{
  font-family: FontAwesome;
    position: absolute;
    font-size: 39px;
    color: #17a2b8;
    left: 0;
  -webkit-transition: -webkit-transform .2s ease-in-out;
    transition:transform .2s ease-in-out;
}
#what-we-do .card .block-1:before{
    content: "\f24e";
}
#what-we-do .card .block-2:before{
    content: "\f2bb";
}
#what-we-do .card .block-3:before{
    content: "\f02d";
}
#what-we-do .card .block-4:before{
    content: "\f03d";
}
#what-we-do .card .block-5:before{
    content: "\f0a1";
}
#what-we-do .card .block-6:before{
    content: "\f0eb";
}
#what-we-do .card:hover .card-block:before{
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);  
  -webkit-transition: .5s all ease;
  -moz-transition: .5s all ease;
  transition: .5s all ease;
}
#player{
  width: 500px;
  height: auto;
}
</style>
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
  <section id="what-we-do">
    <div class="container-fluid">
      <h2 class="section-title mb-2 h1"> ဘာတွေများရှိသလဲ</h2>
      <p class="text-center text-muted h5">တက်သစ်စ အင်ဂျင်နီယာလောင်းလေး များသာမက လုပ်ငန်းခွင်မှာလက်ရှိလုပ်ကိုင်ပြီး Theory ပိုင်းဆိုင်ရာအားနည်းသူများအတွက်ပါအထောက်အကူပြုနိုင်မည်မျှော်လင့်ပါသည်။</p>
      <div class="row mt-5">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div class="card">
            <div class="card-block block-1">
              <h3 class="card-title">ဗဟုသုတ</h3>
              <p class="card-text">စာအုပ်တစ်အုပ်လုံးမဖတ်ဘူးဆိုရင်တောင် တစ်နေ့ ၅မိနစ်စာလောက်ဖတ် နိုင်ရင် ၅မိနစ်စာအကျိုးရှိပါတယ်</p>
              <a href="{{route('posts.post')}}" title="ဆက်ရန်.." class="read-more" >ဆက်ရန်..<i class="fa fa-angle-double-right ml-2"></i></a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div class="card">
            <div class="card-block block-2">
              <h3 class="card-title">အလုပ်အကိုင်</h3>
              <p class="card-text">သက်ဆိုင်ရာနယ်ပယ်ကအလုပ်အကိုင်များသာဖော်ပြခြင်းဖြစ်ပါသည်။</p>
              <a href="{{route('jobs.job')}}" title="ဆက်ရန်.." class="read-more" >ဆက်ရန်..<i class="fa fa-angle-double-right ml-2"></i></a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div class="card">
            <div class="card-block block-3">
              <h3 class="card-title">စာအုပ်</h3>
              <p class="card-text">အင်ဂျင်နီယာနှင့်သက်ဆိုင်သောစာအုပ်များ၏ရီဗျူးများဖတ်နိုင်ပါသည်။</p>
              <a href="{{route('books.book')}}" title="ဆက်ရန်.." class="read-more" >ဆက်ရန်..<i class="fa fa-angle-double-right ml-2"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div class="card">
            <div class="card-block block-4">
              <h3 class="card-title">ဗီဒီယို</h3>
              <p class="card-text">မြန်မာဘာသာ စာတန်းထိုး ဗဟုသုတရာဖွယ်ရာ ဗီဒီယိုများ ကြည့်နိုင်ပါသည်။</p>
              <a href="javascript:void();" title="ဆက်ရန်.." class="read-more" >ဆက်ရန်..<i class="fa fa-angle-double-right ml-2"></i></a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div class="card">
            <div class="card-block block-5">
              <h3 class="card-title">တုံ့ပြန်ချက်</h3>
              <p class="card-text">ဒီဆိုဒ်လေးကောင်းအောင် အမြဲကြိုးစားနေသည်ဖြစ်ပါသောကြောင့်လိုအပ်ချက်များကို ပေးပို့ဆက်သွယ်နိုင်ပါသည်။</p>
              <a href="javascript:void();" title="ဆက်ရန်.." class="read-more" >ဆက်ရန်..<i class="fa fa-angle-double-right ml-2"></i></a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div class="card">
            <div class="card-block block-6">
              <h3 class="card-title">Career Advice</h3>
              <p class="card-text">Coming Soon</p>
              <a href="javascript:void();" title="ဆက်ရန်.." class="read-more" >ဆက်ရန်..<i class="fa fa-angle-double-right ml-2"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </section>
  <div class="plyr__video-embed" id="player">
    <iframe src="https://www.youtube.com/embed/zxkV45xc96M?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" 
    allowfullscreen allowtransparency allow="autoplay"></iframe>
  </div>



@endsection


@section('script')
 <script src="{{ asset('js/app.js') }}" defer></script>
{{-- <script src="https://cdn.plyr.io/3.4.4/plyr.js"></script> --}}
<script>const player = new Plyr('#player');</script>
@endsection