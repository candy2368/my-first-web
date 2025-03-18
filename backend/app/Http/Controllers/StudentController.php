<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // $student = Student::all();
        return response()->json([
            "list" => Student::get(),
            "total" => Student::count()
        ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validate = $request->validate([
            'student_name' => 'required|string',
            'gender'=> 'required|string',
            'dob'=>'required|date|before:today',
            'phone' => 'nullable'
        ]);

        $student = Student::create($validate);
        return response()->json([
            "message" => "you've successfully created a student",
            "data" => $student
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(String $id)
    {
        //checking $id and custome error message.
        $student = Student::find($id);
        if(!$student) {
            return response()->json([
                
                "message" => "not found",
                "error" => true
            ]);
        } else {
            return response()->json($student);
        }
        
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        //
        $validate = $request->validate([
            'student_name' => 'required|string',
            'gender'=> 'required|string',
            'dob'=>'required|date|before:today',
            'phone' => 'nullable'
        ]);
       if($student) {
        $student->update($validate);
        return response()->json([
            "message" => "you've successfully updated.",
            "data" => $student
        ]);
    }
      
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        //
        $student->delete();
        return response()->json([
            "message"=>"data deleted successfully"
        ]);
    }
}
