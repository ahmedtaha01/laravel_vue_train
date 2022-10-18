<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\SignupRequest;
use App\Models\User;

class SignupController extends Controller
{
    public function signup(SignupRequest $request){
        
        User::create($request->all());

        
    }
}
