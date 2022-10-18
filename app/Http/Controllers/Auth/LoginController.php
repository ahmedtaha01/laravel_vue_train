<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(LoginRequest $request){
        if (Auth::attempt(['email' => $request->email ,'password' => $request->password])) {
            return response()->json(Auth::user(),200);
        }

        throw ValidationException::withMessages([
            'error' => 'the provided credentials are incorrect',
        ]);
    }

    public function logout(){
        Auth::logout();
    }
}
