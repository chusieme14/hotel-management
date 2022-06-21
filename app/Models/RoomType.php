<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomType extends Model
{
    use HasFactory;
    protected $fillable = [
        'type',
        'description',
        'price',
        'extra_person_rate',
        'extra_hour_rate',
    ];

    public function rooms(){
        return $this->hasMany(Room::class);
    }
}
