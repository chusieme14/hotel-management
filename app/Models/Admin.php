<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'avatar',
        'department_id',
    ];
    protected $appends = ['fullname'];
    protected $hidden = ['password'];

    public function getFullNameAttribute(){
        return ucfirst($this->first_name). ' '. ucfirst($this->last_name);
    }
}
