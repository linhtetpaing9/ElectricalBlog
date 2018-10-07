@extends('admin-layouts.admin')


@section('css')
<link rel="stylesheet" href="{{ asset('css/sweetalert.min.css')}}">
@endsection
@section('content')
<br>
<div class="row">
    <div class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">
            DataTables Advanced Tables
        </div>
        <div class="panel-body">
        @include('flash::message')

        <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
              <thead>
                  <tr>
                      <th>Book</th>
                      <th>Storage Provider</th>
                      <th>DownLoad</th>
                      <th>Created At</th>
                      <th>Image</th>
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
  <script src="{{ asset('js/sweetalert.min.js') }}"></script>
  <script>
    $(document).ready(function() {
        $('#dataTables-example').DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            ajax: '{!! route('api.books.datatable') !!}',
            columns: [
            { data: 'book_name', name: 'book_name' }, 
            { data: 'storage_provider_name', name: 'storage_provider_name' }, 
            { data: 'book_link', name: 'book_link' }, 
            { data: 'created_at', name: 'created_at' }, 
            { data: 'image', name: 'image' }, 
            { data: 'edit', name: 'edit' }, 
            { data: 'delete', name: 'delete' }, 
            ],
            "columnDefs": [
              { "width": "20%", "targets": 0 }
            ]
        });
    });

     function deleteFunction() {
      event.preventDefault(); // prevent form submit
      var form = event.target.form; // storing the form
      swal({
        title: "Are you sure want to Delete?",
        subtitle: "Check your Input",
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
          swal("Cancelled", "Your Data is Safe :)", "error");
        }
      });
    }
    </script>

@endsection