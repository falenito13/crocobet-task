<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\TodoController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [LoginController::class,'authenticate']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [LoginController::class,'logout']);
    Route::prefix('todo')->controller(TodoController::class)->name('todo.')->group(function(){
        Route::get('/list','index')->name('list');
        Route::post('/','store')->name('store');
        Route::post('/update','update')->name('update');
        Route::post('/delete','destroy')->name('destroy');
    });
});
