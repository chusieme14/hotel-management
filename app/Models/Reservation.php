<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_name',
        'contact_number',
        'start_date',
        'end_date',
        'room_type_id',
        'status',
    ];

    public function room_type(){
        return $this->belongsTo(RoomType::class);
    }
}
