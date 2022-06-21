<?php

namespace Database\Seeders;

use App\Models\RoomType;
use Illuminate\Database\Seeder;

class RoomTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        RoomType::create([
            'type' => 'Single Standard',
            'description' => 'nice',
            'price' => 900,
            'extra_person_rate' => 250,
            'extra_hour_rate' => 300
        ]);

        RoomType::create([
            'type' => 'Single Deluxe',
            'description' => 'nice',
            'price' => 1200,
            'extra_person_rate' => 250,
            'extra_hour_rate' => 300
        ]);

        RoomType::create([
            'type' => 'Twin Deluxe',
            'description' => 'nice',
            'price' => 1650,
            'extra_person_rate' => 250,
            'extra_hour_rate' => 300
        ]);

        RoomType::create([
            'type' => 'Matrimonial Deluxe',
            'description' => 'nice',
            'price' => 1400,
            'extra_person_rate' => 250,
            'extra_hour_rate' => 300
        ]);

        RoomType::create([
            'type' => 'King Deluxe',
            'description' => 'nice',
            'price' => 1750,
            'extra_person_rate' => 250,
            'extra_hour_rate' => 300
        ]);
    }
}
