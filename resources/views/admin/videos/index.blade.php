@extends('admin-layouts.admin')


@section('content')
<br>
<div class="row">
    <div class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">
            Video Tables
        </div>
        <div class="panel-body">
        @include('flash::message')

        <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-video">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Create at</th>
                      <th></th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
              </tbody>
        </table>
      </div>
    </div>
</div>





@endsection


@section('script')
  <script src="{{asset('js/select2.min.js')}}"></script>
  <script>
    $(document).ready(function() {
        $('#dataTables-video').DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            ajax: '{!! route('api.videos.datatable') !!}',
            columns: [
            { data: 'name', name: 'name' }, 
            { data: 'created_at', name: 'created_at' }, 
            { data: 'edit', name: 'edit' }, 
            { data: 'delete', name: 'delete' }, 
            ]
        });
    });
    </script>

@endsection