<?php

namespace App\Http\Controllers\BackOffice;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function login(Request $request){
        $data = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        // if(!auth()->attempt($data)){
        $user = User::where('email',$data['email'])->where('status', true)->first();
        if(!$user){
            return response(['error_message' => 'Incorrect credentials']);
        }
        $user->makeVisible(['password']);
        if(!Hash::check($data['password'],$user->password)){
            return response(['error_message' => 'Incorrect credentials']);
        }
        Auth::guard('web')->login($user);


        return response()->json(['user'=>$user, 'message'=>'success'], 200);
    }

    public function checkUser(Request $request){
        return Auth::guard('web')->user();
    }

    public function logout(Request $request){
        auth()->guard('web')->logout();
        $request->session()->invalidate();

        return "success";
    }

    public function getLoginUser()
    {
        return Auth::User();
    }
}
