<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Factory as Faker;
use App\Models\Job;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
     
         for ($i = 0; $i < 50; $i++) {
            $faker = Faker::create();
            Job::create([
                'title' =>$faker->jobTitle,
                'slug' => Str::slug($faker->jobTitle),
                'description' => $faker->text(),
                'image'=>Str::random(10),
                'salary'=>"$65k-$85k/yr",
                'work_type'=>rand(1,3),
                "info"=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]);
         }
    }
}
