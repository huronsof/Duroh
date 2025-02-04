<?php

namespace App\Http\Controllers;
use App\Models\detalleUsers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;


class DetalleUsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
           return Inertia::render('DetalleUsers/Index',[
        // 'productos'=> Productos::orderBy('id','desc')->paginate(10),
       //    'productos'=>  ProductoResource::collection($products),
         //  'categorias'=>  CategoriaResource::collection( $categoris),
         ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
     
     $url='';
     $url1='';
     $url2='';
     $url3='';
     $url4='';
     $url5='';
     $url6='';
     $url7='';

   
     if($request->file('logo'))
       {
          $img= $request->file('logo')->store('images','public');
          $url = Storage::url( $img);
       }
     if($request->file('logoprod'))
       {
          $img= $request->file('logoprod')->store('images','public');
          $url1 = Storage::url( $img);
       }

    if($request->file('banner1'))
       {
          $img= $request->file('banner1')->store('images','public');
          $url2 = Storage::url( $img);
       }
    if($request->file('banner2'))
       {
          $img= $request->file('banner2')->store('images','public');
          $url3 = Storage::url( $img);
       }
  if($request->file('banner3'))
       {
          $img= $request->file('banner3')->store('images','public');
          $url4 = Storage::url( $img);
       }
  if($request->file('banner4'))
       {
          $img= $request->file('banner4')->store('images','public');
          $url5 = Storage::url( $img);
       }
  if($request->file('banner5'))
       {
          $img= $request->file('banner5')->store('images','public');
          $url6 = Storage::url( $img);
       }
  if($request->file('banner6'))
       {
          $img= $request->file('banner6')->store('images','public');
          $url7 = Storage::url( $img);
       }
    $request->user()->detalleUsers()->create([

         'logo'         => $url,                           
         'logoprod'     => $url1,                           
         'nombre'       => $request->input('nombre'),                           
         'direccion'    => $request->input('direccion'),                           
         'telefono'     => $request->input('telefono'),                           
         'celular'      => $request->input('celular'),                           
         'email_contact'=> $request->input('email_contact'),                           
         'facebook'     => $request->input('facebook'),                           
         'whatsapp'     => $request->input('whatsapp'),                           
         'instagram'    => $request->input('instagram'),                           
         'tiktok'       => $request->input('tiktok'),                           
         'banner1'      => $url2,                           
         'titulo1'      => $request->input('titulo1'),                           
         'subtitulo1'   => $request->input('subtitulo1'),                           
         'banner2'      => $url3,                             
         'titulo2'      => $request->input('titulo2'),                           
         'subtitulo2'   => $request->input('subtitulo2'),                           
         'banner3'      => $url4,                         
         'titulo3'      => $request->input('titulo3'),                           
         'subtitulo3'   => $request->input('subtitulo3'),                           
         'banner4'      => $url5,                            
         'titulo4'      => $request->input('titulo4'),                           
         'subtitulo4'   => $request->input('subtitulo4'),                           
         'banner5'      => $url6,                            
         'titulo5'      => $request->input('titulo5'),                           
         'subtitulo5'   => $request->input('subtitulo5'),                           
         'banner6'      => $url7,                           
         'titulo6'      => $request->input('titulo6'),                           
         'subtitulo6'   => $request->input('subtitulo6'),
     
       ]); 
  
     return back()->with('success','Configuracion  Guardada con Exito'); 
    //    return response()->json(['succes'=>$url]);
     }

    /**
     * Display the specified resource.
     */
    public function show(detalleUsers $detalleUsers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(detalleUsers $detalleUsers)
    {
         //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, detalleUsers $detalleUsers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(detalleUsers $detalleUsers)
    {
        //
    }
}
