<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name' => 'HR',
                'email' => 'hr@crocobet.com',
                'password' => Hash::make('Z~.^bmP9bzKb^._A'),
            ],
            [
                'name' => 'QA Engineer',
                'email' => 'qa@crocobet.com',
                'password' => Hash::make('Z~.^bmP9bzKb^._A'),
            ],
            [
                'name' => 'DevOps Engineer',
                'email' => 'devops@crocobet.com',
                'password' => Hash::make('Z~.^bmP9bzKb^._A'),
            ],
        ];
        User::insert($data);
    }
}
