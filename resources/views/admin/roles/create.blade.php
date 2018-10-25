@extends('admin-layouts.admin')

@section('css')
<link rel="stylesheet" href="{{asset('css/select2.min.css')}}">
<link rel="stylesheet" href="{{asset('css/select2-bootstrap.min.css')}}">

@endsection

@section('content')
<br>
<div class="row">
    <div class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">
            Role
        </div>
        <div id="app" class="panel-body">
          @include('flash::message')
          <div class="col-lg-12">
            <form action="{{route('roles.store')}}" id="form-data" method="POST">
            @csrf
            <div class="form-group">
              <label for="name">Role Name</label>
              <input type="text" class="form-control" name="name">
            </div>
            <div class="form-group">
              <label for="policy_type">Policy</label>
              <select name="policy_type" class="form-control myclass" single="single">
                <option value="ElectricalBlog\Post">Post</option>
                <option value="ElectricalBlog\Video">Video</option>
                <option value="ElectricalBlog\Book">Book</option>
                <option value="ElectricalBlog\Job">Job</option>
              </select>
            </div>
            <div class="form-group">
              <label for="permissions">Permission</label>
              <select name="permissions[]" class="form-control myclass" multiple="multiple">
                <option value="view">View</option>
                <option value="create">Create</option>
                <option value="delete">Delete</option>
                <option value="update">Update</option>
              </select>
            </div>
              <div class="form-group">
                <button type="submit" class="btn btn-info">Submit</button>
              </div>
          </form>
         </div>
        </div>
      </div>
  </div>
</div>




@endsection


@section('script')
  <script src="{{ asset('js/app.js') }}"></script>
  <script src="{{asset('js/select2.min.js')}}"></script>


  
   <script>
      $('.myclass').select2();
 </script>


@endsection