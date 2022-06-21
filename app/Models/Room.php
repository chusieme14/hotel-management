<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;
    protected $fillable = [
        'room_type_id',
        'number',
        'status',
        'check_in_id',
    ];

    const IDLE=0;
    const USING=1;
    const CLEANING=2;
    const RESERVED=3;

    public function room_type(){
        return $this->belongsTo(RoomType::class);
    }
}
