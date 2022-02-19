<?php

namespace Database\Seeders;

use App\Models\TodoStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TodoStatusSeeder extends Seeder
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
                'name' => 'To do'
            ],
            [
                'name' => 'In progress'
            ],
            [
                'name' => 'Done'
            ]
        ];
        TodoStatus::insert($data);
    }
}
