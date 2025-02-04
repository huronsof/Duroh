<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventoResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [

        "id"=> $this->resource->id,
        "titulo"=> $this->resource->titulo,
        "Descripcion"=> $this->resource->Descripcion,
        "fecha"=> $this->resource->fecha,
        "activo"=> $this->resource->activo,
        "created_at"=> $this->resource->created_at->diffForHumans(),
        "user"=> UserResource::make($this->whenLoaded("user")),
        ];
    }
}
