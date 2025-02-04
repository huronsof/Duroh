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
        Schema::create('detalle_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('logo');    
            $table->string('logoprod');    
            $table->string('nombre');   
            $table->string('direccion');  
            $table->string('telefono'); 
            $table->string('celular'); 
            $table->string('email_contact'); 
            $table->string('facebook');
            $table->string('whatsapp');
            $table->string('instagram'); 
            $table->string('tiktok');             
            $table->string('banner1'); 
            $table->string('titulo1'); 
            $table->string('subtitulo1'); 
            $table->string('banner2');
            $table->string('titulo2'); 
            $table->string('subtitulo2');  
            $table->string('banner3');  
            $table->string('titulo3'); 
            $table->string('subtitulo3');    
            $table->string('banner4');   
            $table->string('titulo4'); 
            $table->string('subtitulo4');  
            $table->string('banner5'); 
            $table->string('titulo5'); 
            $table->string('subtitulo5');     
            $table->string('banner6');  
            $table->string('titulo6'); 
            $table->string('subtitulo6');                  
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detalle_users');
    }
};
