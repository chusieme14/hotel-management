<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Room::create([
            'room_type_id' => 3,
            'number' => 1
        ]);
        Room::create([
            'room_type_id' => 4,
            'number' => 2
        ]);
        Room::create([
            'room_type_id' => 3,
            'number' => 3
        ]);
        Room::create([
            'room_type_id' => 4,
            'number' => 4
        ]);
        Room::create([
            'room_type_id' => 1,
            'number' => 5
        ]);
        Room::create([
            'room_type_id' => 2,
            'number' => 6
        ]);
        Room::create([
            'room_type_id' => 5,
            'number' => 7
        ]);
    }
}
