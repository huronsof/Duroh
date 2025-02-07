<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventoResource;
use App\Models\eventos;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Psy\Readline\Hoa\Console;
use Illuminate\Support\Facades\Storage;
use App\Services\MyService;

class EventosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
     protected $myService;
        public function __construct(MyService $myService)
    {
        $this->myService = $myService;
    }

    public function index()
    {
     return Inertia::render('Eventos/Index',[
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
       
       $activo = 0;
       if ($request->input('activo')){
           $activo = 1;
        };
    

       $request->validate([
            'titulo' => 'required',
            //'activo' => 'required',
            // Agrega más reglas de validación según tu caso
         ]);
      $request->user()->eventos()->create([
        'titulo'    => $request->input('titulo'),
        'Descripcion' => $request->input('descripcion'),
        'fecha' => $request->input('fecha'),
        'activo' => $activo,
      ]); 
      return   back()->with('success','Evento Guardado con Exito'); 
    }

    /**
     * Display the specified resource.
     */
    public function show(eventos $eventos)
    {
      //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(eventos $eventos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, eventos $eventos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(eventos $eventos)
    {
        //
    }
}
