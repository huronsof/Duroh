<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Productos extends Model
{
    use HasFactory;
    protected $fillable = ['nombre','alias','categoria','Descripcion','stock','valor_unitario','valor_venta','activo','image1',
'image2',
'image3',
'image4',
'image5',
'stock',
'valor_venta'];

 public function user(): BelongsTo{
    return $this->belongsTo(User::class);
 }


}
