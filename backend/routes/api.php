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


//Route::resource('products',ProductController::class);


Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);

// Route::get('/products/search/{name}',[ProductController::class,'search']);
// Route::get('/products/{id}',[ProductController::class,'show']);

Route::get('/jobs',[JobController::class,'index']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/jobs',[JobController::class,'store']);
    // Route::post('/logout',[AuthController::class,'logout']);
    // Route::get('/products',[ProductController::class,'index']);
    // Route::post('/products',[ProductController::class,'store']);
    // Route::put('/products/{id}',[ProductController::class,'update']);
    // Route::delete('/products/{id}',[ProductController::class,'delete']);
});




//Route::post('/auth/register',[AuthController::class,'createUser']);
//Route::post('/auth/login',[AuthController::class,'loginUser']);
//Route::get('/jobs',[JobController::class,'index'])->middleware('auth:sanctum');






Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
