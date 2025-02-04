<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriaResource;
use App\Http\Resources\DetalleuserResource;
use App\Http\Resources\ProductoResource;
use App\Models\categoria;
use App\Models\detalleUsers;
use App\Models\Productos;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Psy\Readline\Hoa\Console;
use Illuminate\Support\Facades\Storage;

class ProductosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $products = Productos::with('user')->latest()->get();
        $categoris = categoria::with('user')->latest()->get();

       // return ProductoResource::collection($products);

       return Inertia::render('Productos/Index',[
        // 'productos'=> Productos::orderBy('id','desc')->paginate(10),
           'productos'=>  ProductoResource::collection($products),
           'categorias'=>  CategoriaResource::collection( $categoris),
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

     $file = $request->file('image');

   
     $i=0;
     $url='';
     $url2='';
     $url3='';
     $url4='';
     $url5='';

    if (is_array($file)) {
        foreach ($file as $item) {
          switch ($i) {
            case 0:
                  $img= $item->store('images','public');
                  $url = Storage::url( $img);
                 break;
            case 1:
                  $img2= $item->store('images','public');
                  $url2 = Storage::url( $img2);
                break;
            case 2:
                  $img3= $item->store('images','public');
                  $url3 = Storage::url( $img3);
                break;
            case 3:
                  $img4= $item->store('images','public');
                  $url4 = Storage::url( $img4);
                 break;
             case 4:
                  $img5= $item->store('images','public');
                  $url5 = Storage::url( $img5);
              break;
            }
         $i++;   
        }
    } else {
        $file->store('images','public');
    }
 
       $request->user()->Productos()->create([
      
        'nombre' => $request->input('nome'),
        'alias'=> $request->input('alias'),
        'categoria' => $request->input('cate'),
        'Descripcion' => $request->input('descripcion'),
        'stock' => $request->input('stock'),
        'valor_unitario' => $request->input('vunit'),
        'valor_venta' => $request->input('vventa'),
        'activo' => $activo,
        'image1' => $url,
        'image2' => $url2,
        'image3' => $url3,
        'image4' => $url4,
        'image5' => $url5,
        
     
       ]); 

     return   back()->with('success','Producto Guardado con Exito'); 
    }

    /**
     * Display the specified resource.
     */
    public function show(Productos $producto)
    {
      
      $products = Productos::with('user')->latest()->get();

       // return ProductoResource::collection($products);Productos::find($producto);
    //  return  $producto;
        $detalleUsr = detalleUsers::with('user')->latest()->get();
       return Inertia::render('Productos/DetalleProd',[
            'dproductos'=> $producto,
       //   'productos'=> Productos::orderBy('id','desc')->paginate(10),
            'productos'=>  ProductoResource::collection($products),
            'detalleuser'=>  DetalleuserResource::collection( $detalleUsr),
      ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Productos $productos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Productos $productos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Productos $productos)
    {
        //
    }

    public function variableWompy(){
        return  response()->json(  ['wompy'=>config('app.wompy')]);
    }
    

}
