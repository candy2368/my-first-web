<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('students',[StudentController::class,'index']);
Route::get('students/{student}',[StudentController::class,'show']);
Route::post('students',[StudentController::class,'store']);
Route::put('students/{student}',[StudentController::class,'update']);
Route::delete('students/{student}',[StudentController::class,'destroy']);

Route::post('register',[AuthController::class,'store']);
Route::post('login',[AuthController::class,'login']);
Route::middleware('auth:sanctum')->post('logout',[AuthController::class,'logout']);
