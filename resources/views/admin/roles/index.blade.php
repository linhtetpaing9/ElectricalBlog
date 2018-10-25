@extends('admin-layouts.admin')

@section('css')
<style>
    .badge-success{
        background: green;
    }
    .badge-primary{
        background: purple;
    }
    .badge-info{
        background: skyblue;
    }
    .badge-danger{
        background: red;
    }
</style>
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
            @foreach($roles as $role)
            <div class="panel panel-success">
                <div class="panel-heading">
                    {{$role->name}}
                </div>
                <div class="panel-body" >
                    <p>{{$role->policy_type}}</p>
                    @if(array_key_exists('view', $role->permissions))
                        @if($role->permissions['view'])
                            <span class="badge badge-primary">View</span>
                        @endif
                    @endif
                    @if(array_key_exists('create', $role->permissions))
                        @if($role->permissions['create'])
                            <span class="badge badge-success">Create</span>
                        @endif
                    @endif
                    @if(array_key_exists('update', $role->permissions))
                        @if($role->permissions['update'])
                            <span class="badge badge-info">Update</span>
                        @endif
                    @endif
                    @if(array_key_exists('delete', $role->permissions))
                        @if($role->permissions['delete'])
                            <span class="badge badge-danger">Delete</span>
                        @endif
                    @endif
                </div>
            </div>
            @endforeach
          </div>
        </div>
      </div>
  </div>
</div>




@endsection


@section('script')
  <script src="{{ asset('js/app.js') }}" defer></script>

  <script src="{{asset('js/select2.min.js')}}"></script>

@endsection