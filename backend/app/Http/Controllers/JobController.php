<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;

class JobController extends Controller
{
    public function getType(Request $request){
        $type=0;
        if($request->type=="freelance"){
            $type = 3;
        }
        else if($request->type=="full-time"){
            $type = 1;
        }
        else if($request->type==="part-time"){
            $type = 2;
        }
        else{
            return response()->json(["message"=>"Invalid type"]);
        }
        $data = Job::where('work_type',$type)->limit(5)->orderByDesc('created_at')->get();
        return response()->json(["data"=>$data]);
        
    }
    public function pagination($offset=0,$limit=5){
        $count = Job::count();
        $data = Job::offset($offset)->limit($limit)->orderByDesc('created_at')->get();
        return response()->json(["totalCount"=>$count,"data"=>$data]);   
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Job::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $create = Job::create([
            "title"=>$request->title,
            "salary"=>$request->salary,
            "work_type"=>$request->workType,
            "description"=>$request->detail,
            "info"=>$request->description,
            "image"=>$request->url,
            "slug"=>\Str::slug($request->title)
        ]);
        if($create){
            return response()->json(["message"=>"success","data"=>$create]);
        }

        return response()->json(["message"=>"error"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
