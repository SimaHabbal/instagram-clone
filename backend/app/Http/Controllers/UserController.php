<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    function getUsers($id=null){
        if ($id){
            $user = User::find($id);
        }else{
            $user = User::all();
        }

        return response()->json([
            "status" => "successfully got the user",
            "data" => $user
        ]);
    }


}
