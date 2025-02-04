<?php

namespace App\Http\Controllers;

use App\Models\categoria;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriaController extends Controller
{

    public function index()
    {

      return Inertia::render('Categoria/Index',[
        'subtitulo'=> 'Envio desde la web'
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
       $activo = 0;
       if ($request->input('activo')){
           $activo = 1;
        };
    
     $rifa_pro = 0;
       if ($request->input('rifa_pro')){
           $rifa_pro = 1;
        };

       $request->validate([
            'nome' => 'required',
            //'activo' => 'required',
            // Agrega más reglas de validación según tu caso
         ]);
      $request->user()->categorias()->create([
        'nombre'    => $request->input('nome'),
        'activo' => $activo,
        'rifa_pro' => $rifa_pro,
      ]); 

       // $isChecked = $request->input('CheckboxState');
       // return ($isChecked);
    //    $dato = new categoria();
      //  $dato->nombre = $request->input('nome');
        //$dato->activo = $activo;
       // $dato->rifa_pro = $rifa_pro;
       // $dato->campo2 = $request->input('activo');
        // Asigna más campos según sea necesario

        // Guardar el objeto en la base de datos
        //$dato->save();
       // return ($request);
      //  return redirect()->route('dashboard')->with('success','Categoria Guarda con Exito');
      return back()->with('success','Categoria Guarda con Exito');
    }

    /**
     * Display the specified resource.
     */
    public function show(categoria $categoria)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(categoria $categoria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, categoria $categoria)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(categoria $categoria)
    {
        //
    }
}
