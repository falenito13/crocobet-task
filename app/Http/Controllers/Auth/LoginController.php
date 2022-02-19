<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class LoginController extends Controller
{

    public function authenticate(LoginRequest $request)
    {
        if (Auth::attempt($request->validated())) {
            return response(['status' => Response::HTTP_OK, 'token' =>
                auth()->user()->createToken('API Token')->plainTextToken], ResponseAlias::HTTP_OK);
        }
        return response(['auth' => [__('Credentials doesnt match')]]);
    }

    public function logout(Request $request)
    {
        Auth::user()->tokens()->delete();
        $request->user()->currentAccessToken()->delete();
        return response(['status' => ResponseAlias::HTTP_NO_CONTENT,
            'message' => 'User logged out!'], ResponseAlias::HTTP_NO_CONTENT);
    }
}
