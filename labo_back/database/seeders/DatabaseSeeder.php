<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(3)->create();

        \App\Models\User::factory()->create([
            'name' => 'Dlimi Soumaya',
            'email' => 'Admin@admin.com',
            'password'=>Hash::make('Admin12345@'),
            'role'=>'admin'
        ]);
    }
}
