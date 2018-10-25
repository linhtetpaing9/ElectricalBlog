<?php

namespace ElectricalBlog\Http\Requests;

use ElectricalBlog\Feedback;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class FeedbackForm extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => '',
            'body' => ''
        ];
    }

    public function persist()
    {
        $this->request->add(['user_id' => Auth::id()]);
        // $this->user_id = Auth::id();
        // dd($this);
        $feedback = Feedback::create($this->all());
        // $feedback->create($this->only(['user_id' => Auth::id()]));
    }
}
