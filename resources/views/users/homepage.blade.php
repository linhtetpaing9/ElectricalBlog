{{-- {{$user->posts->recommends}} --}}
{{-- @foreach($user->recommendable) --}}
@foreach($user->getRecommend() as $recommend)
<div class="post-preview">

  	<p><strong>{{$user->name}}</strong> recommended to 
  		@if(strpos($recommend->recommendable_type, 'Post'))
  		<a href="{{route('posts.show', $recommend->recommendable_id)}}" class="text-info">{{$recommend->recommendable->title}}</a>
  		@elseif(strpos($recommend->recommendable_type, 'Book'))
  		<a href="{{route('books.show', $recommend->recommendable_id)}}" class="text-info">{{$recommend->recommendable->book_name}}</a>
  		@elseif(strpos($recommend->recommendable_type, 'Video'))
  		<a href="{{route('videos.show', $recommend->recommendable_id)}}" class="text-info">{{$recommend->recommendable->name}}</a>
  		@endif
  		 at <span class="text-danger">{{$recommend->created_at->diffForHumans()}}</span>
  	</p>
</div>
<hr>
@endforeach
  