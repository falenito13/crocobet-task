<?php

namespace App\Http\Requests\Todo;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class TodoStoreRequest extends FormRequest
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
            'firstname' => 'required|string',
            'deadline_date' => 'required|date|after:' . now()->format('H:i:s'),
            'user_id' => 'required|integer|exists:users,id'
        ];
    }

    public function messages()
    {
        return [
            'user_id.required' => 'User field is required'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        return response()->json($validator->errors())->throwResponse();
    }
}
