<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BackOffice\AuthController;
use App\Http\Controllers\BackOffice\UserController;
use App\Http\Controllers\BackOffice\ReservationController;
use App\Http\Controllers\BackOffice\RoomTypeController;

Route::get('checkuser',[AuthController::class,'checkUser']);
Route::post('login',[AuthController::class,'login']);
Route::group(['middleware'=>['auth:web']],function(){
    Route::get('get-user',[AuthController::class,'getLoginUser']);
    Route::get('logout',[AuthController::class,'logout']);
    
    Route::get('check-email', [UserController::class, 'checkEmail']);
    Route::resource('users', UserController::class);
    Route::resource('reservations', ReservationController::class);
    Route::resource('room-types', RoomTypeController::class);
});
