<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request){
        $fields = $request->validate([
            'name' => 'required|string',
            'email' =>'required|string|unique:users,email',
            'password'=>'required|string|confirmed'
        ]);
        $user = User::create([
            'name'=>$fields['name'],
            'email'=>$fields['email'],
            'password'=>bcrypt($fields['password'])
        ]);
        $token = $user->createToken('myapptoken')->plainTextToken;

        $response=[
            'user'=> $user,
            'token'=>$token
        ];
        return response($response,201);
    }

    public function login(Request $request){
        $fields = $request->validate([
            'email' =>'required|string',
            'password'=>'required|string'
        ]);
        
        $user = User::where('email',$fields['email'])->first();
        if(!$user || !Hash::check($fields['password'],$user->password)){
            return response([
                'message' =>'Error',
            ],401);
        }
        $token = $user->createToken('myapptoken')->plainTextToken;

        $response=[
            'user'=> $user,
            'token'=>$token
        ];
        return response($response,201);
    }

    public function logout(Request $request){
       // $request->user()->token()->revoke();
        $request->user()->tokens()->delete();
        return [
            'message' => 'Logged out'
        ];
    }
}