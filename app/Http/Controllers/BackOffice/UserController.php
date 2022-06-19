<?php

namespace App\Http\Controllers\BackOffice;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Helpers\SearchFilterHelpers\Users;

class UserController extends Controller
{
    public function index()
    {
        return (new Users)->searchable();
    }

    public function store(Request $request)
    {
        User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'shift' => $request->shift,
            'status' => $request->status,
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = User::where('id', $id)->first();
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        if($request->password){
            $user->password = Hash::make($request->password);
        }
        $user->shift = $request->shift;
        $user->status = $request->status;
        $user->save();
    }

    public function destroy($id)
    {
        User::findOrfail($id)->delete();
    }

    public function checkEmail()
    {
        if(Request()->id){
            return User::where('email', Request()->email)->where('id', '!=', Request()->id)->first();
        }else{
            return User::where('email', Request()->email)->first();
        }
    }
}
