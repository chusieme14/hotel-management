<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'login','logout',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}