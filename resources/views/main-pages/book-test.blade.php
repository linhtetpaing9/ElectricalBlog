@extends('layouts.main-page')

@section('css')
<link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap4.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/rowreorder/1.2.5/css/rowReorder.dataTables.min.css">
@endsection

@section('header')
<!-- Page Header -->
<header class="masthead" style="background-image: url('img/Electrical.png')">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="site-heading">
          <h1>Books</h1>
          <span class="subheading" id="quoteDisplay"></span>
        </div>
      </div>
    </div>
  </div>
</header>
@endsection

@section('content')
<div id="app">
  <div class="container">
  <div class="row">
    <div class="col-lg-12">
        <table class="display nowrap" style="width:100%" id="dataTables-example">
              <thead>
                  <tr>
                    <th>Book</th>
                    <th>Storage Provider</th>
                    <th>DownLoad</th>
                    <th>Posted At</th>
                    <th>Image</th>
                    <th>Author</tsh>
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
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/rowreorder/1.2.5/js/dataTables.rowReorder.min.js"></script>
  <script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
 <script src="{{ asset('js/app.js') }}" defer></script>
 <script src="{{ asset('js/quotes.js') }}"></script>
 <script>
    $(document).ready(function() {
        $('#dataTables-example').DataTable({
            rowReorder: {
              selector: 'td:nth-child(2)'
            },
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
            { data: 'author', name: 'author' }, 
            ],
            
            
        });
    });
    </script> 
@endsection