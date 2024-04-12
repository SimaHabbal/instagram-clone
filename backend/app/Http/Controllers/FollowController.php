<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Follower;
use App\Models\User;


class FollowController extends Controller
{

    function follow(Request $request){
        // $user_id = Auth::id();
        $follow = new Follower;
        $follow->user_one_id = $request->user_one_id;
        $follow->user_two_id = $request->user_two_id;
        $follow->save();
        return response()->json(['user_one_id' => $request->user_one_id,'user_two_id' => $request->user_two_id],200);
    }

    function getFollowing(){
        $user_id = Auth::id();
        $follow = Follower::where('user_one_id' ,$user_id)->get(['user_two_id']);
        $user = User::whereIn('id',$follow)->get();
        return response()->json([
            'users one id' => $user_id,'follow' => $follow,'user' => $user],200);
    }

}
