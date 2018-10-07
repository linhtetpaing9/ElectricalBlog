@extends('admin-layouts.admin')

@section('css')
<link rel="stylesheet" href="{{ asset('css/bootstrap-wysihtml5.css')}}">
<link rel="stylesheet" href="{{asset('css/select2.min.css')}}">
<link rel="stylesheet" href="{{asset('css/select2-bootstrap.min.css')}}">
@endsection

@section('content')

<br>
<div class="row">
  <div class="col-lg-12" id="app">
    <div class="panel panel-default">
        <div class="panel-heading">
          Post Edit
        </div>
        <div class="panel-body">
      <form action="{{route('posts.update', $post->id)}}" id="form-data" method="POST">
        @method('PATCH')
        @csrf
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" name="title" value="{{$post->title}}">
        </div>
        <div class="form-group">
          <label for="title">Estimate Reading Time</label>
          <input type="text" class="form-control" name="readable_time" value="{{$post->readable_time}}">
        </div>
        <div id="app">
        <file-browser-component></file-browser-component>       
        </div>
        <div class="form-group">
          <label for="categories">Categories</label>
          <select name="categories[]" class="form-control myclass" multiple="multiple">
            @foreach($categories as $key=>$value)
                @if(array_key_exists($key, $existPostCategoryId))
                  <option value="{{$key}}" selected>{{$value}}</option>
                @else
                  <option value="{{$key}}">{{$value}}</option>
                @endif
            @endforeach
          </select>
        </div>
        <div class="form-group">
          <textarea id="mymce" name="body">{{$post->body}}</textarea>
        </div>
          <div class="form-group">
            <button type="submit" class="btn btn-info">Submit</button>
          </div>
      </form>
        </div>
    </div>
  </div>
</div>



@endsection


@section('script')
  <script src="{{ asset('js/tinymce/jquery.tinymce.min.js') }}"></script>
  <script src="{{asset('js/select2.min.js')}}"></script>
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
        $('.myclass').select2();

    });
 </script>
@endsection