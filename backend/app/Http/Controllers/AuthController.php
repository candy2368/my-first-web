<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //to display all user data include profiles.
        $user = User::with('profile')->get();
        return response()->json($user);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //note when you use 2 differents model you'll have to assign each manaully because the data will be overwritten.
        //you will need to create $user and $profile manually.
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'password'=>'required|min:6',
            'image'=>'nullable|mimes:jpeg,jpg,png,gif|max:2048',
            'description' => 'nullable',
           
        ]);

        $validate['password'] = Hash::make($validate['password']);
        $validate['status'] = $request->boolean('status');

        $user = User::create([
            'name' => $validate['name'],
            'email' => $validate['email'],
            'password' =>$validate['password']
        ]);
        if($request->hasFile('image')) {
            $validate['image'] = $request->file('image')->store('profile','public');
        }
        $user->profile()->create([
            'image'=> $validate['image'],
            'description'=>$validate['description'],
            'status'=>$validate['status']
        ]);

        return response()->json([
            "user" => $user->load('profile'),
            "message" => "you've successfully created user."
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
        return response()->json($user);
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
      

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function login(Request $request, User $user) {
        $validate = $request->validate([
            'email'=>'required|email',
            'password'=>'required'
        ]);

        //compare if current email match with email from db.
        $user = User::where('email', $validate['email'])->first();

        //you check if user exists,comparing current password with the hashed password
        // which retrieve from db ($user->password) 
        if(!$user || !Hash::check($validate['password'],$user->password)) {
            //if condition true:
            return response()->json(
                ["message"=> "error credential"],401
            );
        }
        //create token for user
        //php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
        //import hasAPItoken in user model then add HasAPIToken in @var

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'message' => 'Logged in successfully',
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
       

    }

    public function logout(Request $request) {
        if ($request->user()) {
            // Delete current access token
            $request->user()->currentAccessToken()->delete();
    
            return response()->json([
                'message' => 'Logged out successfully.'
            ]);
        }
    
        return response()->json([
            'message' => 'Unauthenticated.'
        ], 401);
    }
}
