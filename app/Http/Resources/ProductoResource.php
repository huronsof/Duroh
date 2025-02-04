<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class ProductoResource extends JsonResource
{
    public function toArray(Request $request): array
    {

        $datos = DB::select(' select c.nombre as categoria from productos p inner join categorias c on p.categoria = c.id and p.user_id = c.user_id ');
        return [

        "id"=> $this->resource->id,
        "alias"=> $this->resource->alias,
        "categoria"=> $this->resource->categoria,
        "Descripcion"=> $this->resource->Descripcion,
        "image1"=> $this->resource->image1,
        "image2"=> $this->resource->image2,
        "image3"=> $this->resource->image3,
        "image4"=> $this->resource->image4,
        "image5"=> $this->resource->image5,
        "stock"=> $this->resource->stock,
        "valor_venta"=> $this->resource->valor_venta,
        "created_at"=> $this->resource->created_at->diffForHumans(),
        "data_product"=>$datos,
        "user"=> UserResource::make($this->whenLoaded("user")),
        ];
    }
}
