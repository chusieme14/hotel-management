<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'first_name' => 'admin',
            'last_name' => 'admin',
            'email' => 'admin@admin.com',
            'isadmin' => true,
            'password' => '$2y$10$L.gDZljq.Po8Qm82bh5e6usGncbIqSMhd1MIsDbikPvMfc3o8YKWS',
        ]);
        User::create([
            'first_name' => 'user',
            'last_name' => 'user',
            'email' => 'user@user.com',
            'isadmin' => false,
            'password' => '$2y$10$L.gDZljq.Po8Qm82bh5e6usGncbIqSMhd1MIsDbikPvMfc3o8YKWS',
        ]);
    }
}
