<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index()
    {
        return response()->json([
            "data" => \App\Models\Job::all()
        ]);
    }
}
