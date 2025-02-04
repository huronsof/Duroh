<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('categorias', function (Blueprint $table) {
          $table->foreignId('user_id')->after('id')->constrained()->cascadeOnDelete(); 
          $table->integer('rifa_pro')->after('activo')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('categorias', function (Blueprint $table) {
     
         $table->dropColumn('user_id');
         $table->dropColumn('rifa_pro');
        });
    }
};
