<div class="panel-body">
	<form method="POST" action="{{ route('users.update', $user->id) }}" aria-label="{{ __('Register') }}">
		@method('PUT')
    	@csrf
        <fieldset>
            <div class="form-group">
                <input class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{$user->name}}" placeholder="Name" required autofocus>
            @if ($errors->has('name'))
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $errors->first('name') }}</strong>
                </span>
            @endif

            </div>
            <div class="form-group">
                <input class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ $user->email }}" required" placeholder="E-mail">
                @if ($errors->has('email'))
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif

            </div>
            <div class="form-group">
                <input class="form-control {{ $errors->has('password') ? ' is-invalid' : '' }}" placeholder="New Password" name="password" type="password" required>
                @if ($errors->has('password'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Password Confirmation" name="password_confirmation" type="password">
            </div>
            <!-- Change this to a button or input when using this as a form -->
            <div class="form-submit">
                <button class="btn btn-lg btn-success btn-block">Update</button>
            </div>
        </fieldset>
    </form>
</div>