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
        Schema::table('productos', function (Blueprint $table) {
            $table->string('image1')->after('activo')->nullable();
            $table->string('image2')->after('activo')->nullable();
            $table->string('image3')->after('activo')->nullable();
            $table->string('image4')->after('activo')->nullable();
            $table->string('image5')->after('activo')->nullable();
          
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('productos', function (Blueprint $table) {
            $table->dropColumn('image1');
            $table->dropColumn('image2');
            $table->dropColumn('image3'); 
            $table->dropColumn('image4');
            $table->dropColumn('image5');
        });
    }
};
