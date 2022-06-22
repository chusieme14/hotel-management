<?php

namespace App\Http\Controllers\BackOffice;

use App\Helpers\SearchFilterHelpers\CheckIns;
use App\Http\Controllers\Controller;
use App\Models\CheckIn;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CheckInController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return (new CheckIns)->searchable();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $total = $request->total_room_rate + $request->total_ads;
        $checkin = CheckIn::create([
            'room_id' => $request->room_id,
            'user_id' =>$request->user_id,
            'client_name' => $request->room_guest_name,
            'contact_number' => $request->room_guest_contact,
            'extra_persons' => $request->room_guest_extra_person,
            'regular_bill' => $request->total_room_rate,
            'total_paid' => $total,
            'start_date' => Carbon::parse($request->room_guest_start),
            'end_date' => Carbon::parse($request->room_guest_end),
        ]);
        if(Carbon::parse($request->room_guest_start)->format('Y-m-d')==Carbon::now()->format('Y-m-d')){
            $checkin->room()->update([
                'status' => 1,
                'check_in_id' => $checkin->id
            ]);
        }
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
