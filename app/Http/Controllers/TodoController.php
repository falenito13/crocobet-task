<?php

namespace App\Http\Controllers;

use App\Http\Requests\Todo\TodoStoreRequest;
use App\Http\Requests\Todo\TodoUpdateRequest;
use App\Models\Todo;
use App\Models\TodoStatus;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class TodoController extends Controller
{
    protected $todo;

    public function __construct(Todo $todo)
    {
        $this->todo = $todo;
    }

    public function index(): Response
    {
        return response([
            'todo_statuses' => TodoStatus::all(),
            'users' => User::get(['id', 'name']),
            'todos' => $this->todo::with(['statuses', 'users'])->get(),
        ], ResponseAlias::HTTP_OK);
    }

    public function store(TodoStoreRequest $request): Response
    {
        $todo = $this->todo::create($request->validated());
        return response(['todo' => $todo, 'message' => __('Successfully Created'), 'status' => ResponseAlias::HTTP_CREATED], ResponseAlias::HTTP_CREATED);
    }

    public function update(TodoUpdateRequest $request): Response
    {
        $todo = $this->todo::find($request->id);
        $todo->update($request->validated());
        return response(['message' => __('Todo updated successfully!'),
            'status' => ResponseAlias::HTTP_OK, ResponseAlias::HTTP_OK]);
    }

    public function destroy(Request $request): Response
    {
        $todo = $this->todo::where('id', $request->id);
        if ($todo->exists()) {
            $todo->delete();
            return response(['message' => __('Successfully Deleted!'),
                'status' => ResponseAlias::HTTP_NO_CONTENT], ResponseAlias::HTTP_NO_CONTENT);
        }
        return response(['message' => __("Can't find todo"),
            'status' => ResponseAlias::HTTP_NOT_IMPLEMENTED], ResponseAlias::HTTP_NOT_IMPLEMENTED);
    }
}
