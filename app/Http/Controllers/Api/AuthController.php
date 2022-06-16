<?php

namespace App\Http\Controllers\Api;

use App\Models\Graduate;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request){
        $graduate = Graduate::where('email', $request->email)->first();
        if(!$graduate){
            $graduate = Graduate::where('student_number', $request->email)->first();
            if(!$graduate) return response()->json(['message'=>'incorrect data'], 404);
        }
        if (!Hash::check($request->password, $graduate->password)) {
            return response()->json(['message'=>'incorrect data'], 404);
        }
        $tokenResult = $graduate->createToken('Personal Access Token');

        return response()->json([
            'id' => $graduate->id,
            'access_token' => $tokenResult->accessToken
        ]);

    }

    public function details()
    {
        return Graduate::findOrfail(auth()->guard('api')->user()->id);
    }

    public function logout(Request $request){

        auth()->guard('api')->user()->token()->revoke();

        return response()->json(['Success'], 200);
    }

    public function register(Request $request){
        $graduate = Graduate::create($request->all());
        $code = $this->generateCode();
        $graduate->update([
            'share_code' => $code, 
            'password' => Hash::make($request->password)
        ]);
        if($request->detail){
            $graduate->detail()->create($request->detail);
            if(isset($request->detail['company_name'])){
                $graduate->empHistory()->create($request->detail);
            }
        }
        if($request->image_base64){
            $graduate->update([
                'avatar' => userProfileUploader($request->image_base64, 'profile/')
            ]);
        }
    }

    private function generateCode(){
        $code = Str::random(12);
        if(Graduate::where('share_code',$code)->exists()) $this->generateCode();
        return $code;
    }
        
}
