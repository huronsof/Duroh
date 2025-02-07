<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Models\User;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
      $role1 =  Role::create(['name'=>'admin']);
      $role2 =  Role::create(['name'=>'Blogger']);
 

      $user = User::find(2);
      $user ->assignRole($role1);

      Permission::create(['name' => 'das.dashboard'])->assignRole($role1);

      Permission::create(['name' => 'das.productos.index'])->assignRole($role1);
      Permission::create(['name' => 'das.productos.create'])->assignRole($role1);
      Permission::create(['name' => 'das.productos.edit'])->assignRole($role1);
      Permission::create(['name' => 'das.productos.destroy'])->assignRole($role1);

      Permission::create(['name' => 'das.categoria.index'])->assignRole($role1);
      Permission::create(['name' => 'das.categoria.create'])->assignRole($role1);
      Permission::create(['name' => 'das.categoria.edit'])->assignRole($role1);
      Permission::create(['name' => 'das.categoria.destroy'])->assignRole($role1);

      Permission::create(['name' => 'das.eventos.index'])->syncRoles([$role1,$role2]);
      Permission::create(['name' => 'das.eventos.create'])->syncRoles([$role1,$role2]);
      Permission::create(['name' => 'das.eventos.edit'])->syncRoles([$role1,$role2]);
      Permission::create(['name' => 'das.eventos.destroy'])->syncRoles([$role1,$role2]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
      
    }
};
