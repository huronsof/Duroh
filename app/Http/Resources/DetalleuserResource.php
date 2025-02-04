<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DetalleuserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
           "id"=> $this->resource->id,
           "logo"=> $this->resource->logo,   
           "logoprod"=> $this->resource->logoprod,
            "nombre"=> $this->resource->nombre,
            "direccion"=> $this->resource->direccion, 
            "telefono"=> $this->resource->telefono,
            "celular"=> $this->resource->celular,
            "email_contact"=> $this->resource->email_contact,
            "facebook"=> $this->resource->facebook,
            "whatsapp"=> $this->resource->whatsapp,
            "instagram"=> $this->resource->instagram,
            "tiktok"=> $this->resource->tiktok,           
            "banner1"=> $this->resource->banner1,
            "titulo1"=> $this->resource->titulo1,
            "subtitulo1"=> $this->resource->subtitulo1, 
            "banner2"=> $this->resource->banner2,
            "titulo2"=> $this->resource->titulo2,
            "subtitulo2"=> $this->resource->subtitulo2,  
            "banner3"=> $this->resource->banner3,
            "titulo3"=> $this->resource->titulo3,
            "subtitulo3"=> $this->resource->subtitulo3,   
            "banner4"=> $this->resource->banner4,  
            "titulo4"=> $this->resource->titulo4,
            "subtitulo4"=> $this->resource->subtitulo4, 
            "banner5"=> $this->resource->banner5,
            "titulo5"=> $this->resource->titulo5,
            "subtitulo5"=> $this->resource->subtitulo5,     
            "banner6"=> $this->resource->banner6, 
            "titulo6"=> $this->resource->titulo6,
            "subtitulo6"=> $this->resource->subtitulo6,     
            "created_at"=> $this->resource->created_at->diffForHumans(),
            "user"=> UserResource::make($this->whenLoaded("user")),
        ];
    }
}
