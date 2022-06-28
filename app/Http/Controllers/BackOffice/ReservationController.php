<?php

namespace App\Http\Controllers\BackOffice;

use Carbon\Carbon;
use App\Models\Reservation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Helpers\SearchFilterHelpers\Reservations;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return (new Reservations)->searchable();
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
        $dates = Carbon::parse($request->start_date)->format('Y-m-d');
        $datee = Carbon::parse($request->end_date)->format('Y-m-d');
        $datewithTimes = Carbon::parse($dates.' '.'14:00');
        $datewithTimee = Carbon::parse($datee.' '.'12:00');
        return Reservation::create([
            'start_date' => $datewithTimes,
            'end_date' => $datewithTimee,
            'client_name' => $request->client_name,
            'contact_number' => $request->contact_number,
            'room_type_id' => $request->room_type_id
        ]);
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
        $reservation = Reservation::where('id', $id)->first();
        $dates = Carbon::parse($request->start_date)->format('Y-m-d');
        $datee = Carbon::parse($request->end_date)->format('Y-m-d');
        $datewithTimes = Carbon::parse($dates.' '.'14:00');
        $datewithTimee = Carbon::parse($datee.' '.'12:00');
        $reservation->update([
            'start_date' => $datewithTimes,
            'end_date' => $datewithTimee,
            'client_name' => $request->client_name,
            'contact_number' => $request->contact_number,
            'room_type_id' => $request->room_type_id
        ]);
        // $reservation->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $reservation = Reservation::where('id', $id)->first();
        $reservation->update(['status' => 2]);
    }
}
