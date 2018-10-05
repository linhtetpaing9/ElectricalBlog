@extends('admin-layouts.admin')

@section('css')
<link rel="stylesheet" href="{{ asset('css/bootstrap-wysihtml5.css')}}">
<link rel="stylesheet" href="{{asset('css/select2.min.css')}}">
<link rel="stylesheet" href="{{asset('css/select2-bootstrap.min.css')}}">

@endsection


@section('content')
<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">Create Book</h1>
        <form action="{{route('books.store')}}" id="form-data" method="POST">
        @csrf
        <div class="form-group">
          <label for="book_name">Book Name</label>
          <input type="text" class="form-control" name="book_name">
        </div>
        <div class="form-group">
          <label for="author">Author</label>
          <input type="text" class="form-control" name="author">
        </div>

        <div class="form-group">
          <label for="storage_provider_name">Storage Provider Name</label>
          <input type="text" class="form-control" placeholder="Dropbox" name="storage_provider_name">
        </div>

        <div class="form-group">
          <label for="book_link">Book Link</label>
          <input type="text" class="form-control" name="book_link">
        </div>
        
        <div class="form-group">
          <label for="categories">Categories</label>
          <select name="categories[]" class="form-control myclass" multiple="multiple">
            @foreach( $categories as $key=>$value)
              <option value="{{$key}}">{{$value}}</option>
            @endforeach
          </select>
        </div>
        <div id="app">
        <file-browser-component></file-browser-component>       
        </div>
        
          <div class="form-group">
            <button type="submit" class="btn btn-info">Submit</button>
          </div>
      </form>
    </div>
</div>





@endsection


@section('script')
  <script src="{{ asset('js/tinymce/jquery.tinymce.min.js') }}"></script>
  <script src="{{asset('js/select2.min.js')}}"></script>

  <script src="{{ asset('js/tinymce/tinymce.min.js') }}"></script>
  <script src="{{ asset('js/app.js') }}"></script>


 <script>
      $('.myclass').select2({
        tags: true
      });
 </script>
@endsection