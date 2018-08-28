@extends('layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('css/bootstrap-wysihtml5.css')}}">
@endsection

@section('header')
<!-- Page Header -->

<header class="masthead" style="background-image: url('../../img/Electrical.png')">
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

<div class="col-lg-12 col-md-10 mx-auto" id="app">
    <h4 class="card-title">Post Create</h4>
      <form action="{{route('posts.update', $post->id)}}" id="form-data" method="POST">
        @method('PATCH')
        @csrf
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" placeholder="Title Here" name="title" value="{{$post->title}}">
        </div>
        <div class="form-group">
          <textarea id="mymce" name="body" >{{$post->body}}</textarea>
          {{-- <input type="text" name="body" style="display: none"> --}}
        </div>
          <div class="form-group">
            <button type="submit" class="btn btn-info">Submit</button>
          </div>
      </form>
</div>




@endsection


@section('script')
  <script src="{{ asset('js/jquery.min.js') }}"></script>
  <script src="{{ asset('js/tinymce/jquery.tinymce.min.js') }}"></script>
  <script src="{{ asset('js/tinymce/tinymce.min.js') }}"></script>
 <script src="{{ asset('js/app.js') }}" defer></script>
 <script>
   $(document).ready(function() {
        if ($("#mymce").length > 0) {
            tinymce.init({
                selector: "textarea#mymce",
                theme: "modern",
                height: 300,
                plugins: [
                    "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                    "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                    "save table contextmenu directionality emoticons template paste textcolor",
                    "image code"
                ],
                toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | print preview media fullpage | forecolor backcolor emoticons | undo redo | link image",
                image_title: true, 

              automatic_uploads: true,

              file_picker_types: 'image', 
              file_picker_callback: function(cb, value, meta) {
                var input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
                
                input.onchange = function() {
                  var file = this.files[0];
                  
                  var reader = new FileReader();
                  reader.onload = function () {
                    var id = 'blobid' + (new Date()).getTime();
                    var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                    var base64 = reader.result.split(',')[1];
                    var blobInfo = blobCache.create(id, file, base64);
                    blobCache.add(blobInfo);

                    // call the callback and populate the Title field with the file name
                    cb(blobInfo.blobUri(), { title: file.name });
                  };
                  reader.readAsDataURL(file);
                };
                
                input.click();
              }

            });
        }
        // $("#form-data").submit(function(e){

        //   var content = tinymce.get("texteditor").getContent();

        //   $("#data-container").html(content);

        //   return false;

        // });
    });
 </script>
@endsection