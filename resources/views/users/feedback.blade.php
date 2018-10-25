@foreach($user->feedbacks()->latest()->get() as $feedback)
<div class="card">
  <div class="card-body shadow">
    @if($feedback->is_solved)
    <span class="badge badge-success" style="margin-left: 5px"><a href="javascript:void(0)" class="text-white" style="text-decoration: none">
    solved</a></span>
    @endif
    @if($feedback->is_solved)
    <form action="{{route('feedbacks.feedback-delete', $feedback)}}" method="POST" style="float: right">
      @method('DELETE')
      @csrf
      <button type="submit" class="btn btn-danger small-button" >Clear</button>
    </form>
    @endif
    <hr>
    <div class="post-preview">
      <h5 class="text-danger">User Request</h5>
      <a href="#">
        <p> <strong>{{$feedback->title}}</strong></p>
        <span>{{$feedback->body}}</span>
      </a>
      <br>
        
        <hr>
        <h5 class="text-success">Admin Response</h5>
      <p>{{$feedback->response}}</p>
    </div>
  </div>
</div>
<br>
@endforeach