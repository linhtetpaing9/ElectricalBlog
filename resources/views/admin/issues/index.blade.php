@extends('admin-layouts.admin')


@section('content')
<div class="row">
    <div class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">
            DataTables Issue Tables
        </div>
        <div class="panel-body">
        <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
              <thead>
                  <tr>
                      <th>Title</th>
                      <th>Body</th>
                      <th>User</th>
                      <th>Post</th>
                      <th>Create at</th>
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
        $('#dataTables-example').DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            ajax: '{!! route('api.issues.datatable') !!}',
            columns: [
            { data: 'title', name: 'title' }, 
            { data: 'body', name: 'body' }, 
            { data: 'user', name: 'user' }, 
            { data: 'post', name: 'post' }, 
            { data: 'created_at', name: 'created_at' }, 
            ]
        });
    });
    </script>

@endsection