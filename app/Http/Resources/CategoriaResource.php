<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoriaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
    return [

        "id"=> $this->resource->id,
        "nombre"=> $this->resource->nombre,
        "activo"=> $this->resource->activo,
        "rifa_pro"=> $this->resource->activo,
        "user"=> UserResource::make($this->whenLoaded("user")),
        ];
    }
}
