<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class eventos extends Model
{
    use HasFactory;
    protected $fillable = ['titulo','Descripcion','fecha','activo'];




 public function user(): BelongsTo{
    return $this->belongsTo(User::class);
 }

}
