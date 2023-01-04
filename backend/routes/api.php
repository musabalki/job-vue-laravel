<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ProductController;
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




Route::resource('products',ProductController::class);
Route::get('/products/search/{name}',[ProductController::class,'search']);


//Route::get('/products',[ProductController::class,'index']);
//Route::post('/products',[ProductController::class,'store']);
//Route::get('/products/{id}',[ProductController::class,'show']);


//Route::post('/auth/register',[AuthController::class,'createUser']);
//Route::post('/auth/login',[AuthController::class,'loginUser']);
//Route::get('/jobs',[JobController::class,'index'])->middleware('auth:sanctum');






Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
