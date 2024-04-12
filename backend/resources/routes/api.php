<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FollowController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::get("/users/{id?}", [UserController::class, "getUsers"]);
Route::post("/follow", [FollowController::class, "follow"]);
Route::post("/getFollowing", [FollowController::class, "getFollowing"]);


