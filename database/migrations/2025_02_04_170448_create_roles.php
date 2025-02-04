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
      $role1 =  Role::create(['name'=>'editar']);
      $role2 =  Role::create(['name'=>'eliminar']);

      Permission::create(['name' => 'das.dashboard']);

      Permission::create(['name' => 'das.productos.index']);
      Permission::create(['name' => 'das.productos.create']);
      Permission::create(['name' => 'das.productos.edit']);
      Permission::create(['name' => 'das.productos.destroy']);

       Permission::create(['name' => 'das.categoria.index']);
      Permission::create(['name' => 'das.categoria.create']);
      Permission::create(['name' => 'das.categoria.edit']);
      Permission::create(['name' => 'das.categoria.destroy']);

       Permission::create(['name' => 'das.eventos.create']);
      Permission::create(['name' => 'das.eventos.create']);
      Permission::create(['name' => 'das.eventos.edit']);
      Permission::create(['name' => 'das.eventos.destroy']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
      
    }
};
