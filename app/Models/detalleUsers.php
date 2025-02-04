<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class detalleUsers extends Model
{
    use HasFactory;
        protected $fillable = ['logo',
         'logoprod'      ,
         'nombre'       ,
         'direccion'    ,
         'telefono'     ,
         'celular'      ,
         'email_contact',
         'facebook'     ,
         'whatsapp'     ,
         'instagram'    ,
         'tiktok'       ,
         'banner1'      ,
         'titulo1'      ,
         'subtitulo1'   ,
         'banner2'      ,
         'titulo2'      ,
         'subtitulo2'   ,
         'banner3'      ,
         'titulo3'      ,
         'subtitulo3'   ,
         'banner4'      ,
         'titulo4'      ,
         'subtitulo4'   ,
         'banner5'      ,
         'titulo5'      ,
         'subtitulo5'   ,
         'banner6'      ,
         'titulo6'      ,
         'subtitulo6'   
        ];

 public function user(): BelongsTo{
    return $this->belongsTo(User::class);
 }

}
