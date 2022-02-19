<?php

namespace App\Http\Requests\Todo;

use App\Models\Todo;
use App\Models\TodoStatus;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class TodoUpdateRequest extends FormRequest
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
            'id' => ['required', 'integer', 'exists:todos,id'],
            'status_id' => ['sometimes', 'integer','exists:todo_statuses,id', function ($attribute, $value, $fail) {
                $todoStatusId = Todo::find($this->id)->status_id;
                if ($value !== Todo::find($this->id)->status_id + 1) {
                    $todoStatusName = (new Todo())->getStatusNameById($todoStatusId);
                    $fail(__('This attribute is not after to ' . $todoStatusName));
                }
            }
            ],
            'user_id' => ['sometimes', 'integer', 'exists:users,id']
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        return response()->json($validator->errors())->throwResponse();
    }
}
