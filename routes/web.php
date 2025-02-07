<?php

use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\DetalleUsersController;
use App\Http\Controllers\EventosController;
use App\Http\Controllers\ProductosController;
use App\Http\Controllers\ProfileController;
use App\Http\Resources\ProductoResource;
use App\Http\Resources\CategoriaResource;
use App\Http\Resources\DetalleuserResource;
use App\Http\Resources\EventoResource;
use App\Models\Productos;
use App\Models\categoria;
use App\Models\detalleUsers;
use App\Models\eventos;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
Route::get('/ctg', function () {
    return Inertia::render('Categoria/Index',[
        'subtitulo'=> 'Envio desde la web'
    ]);
})->middleware(['auth', 'verified'])->name('ctg');

Route::resource('categoria', CategoriaController::class)
->only('index')
->middleware(['auth', 'verified']) ->name('ctg');

/*
Route::get('/prod', function () {
    return Inertia::render('Productos/Index',[
        'subtitulo'=> 'Envio desde la web'
    ]);
})->middleware(['auth', 'verified'])->name('prod');

Route::middleware(['auth'])->get('categoria', [CategoriaController::class, 'index'])
    ->name('ctg');
->middleware(['auth', 'verified']) ;
Route::middleware(['auth'])->get('producto', [CategoriaController::class, 'index'])
    ->name('prod');


Route::get('/Dprod', function () {
    return Inertia::render('Productos/DetalleProd',[
    ]);
})->middleware(['auth', 'verified'])->name('dprod');

Route::get('/Dprod/{prod}', function () {
    return Inertia::render('Productos/DetalleProd',[
    ]);
})->middleware(['auth', 'verified'])->name('dprod');
*/

Route::resource('categoria', CategoriaController::class)
->only('index','store')
->middleware(['auth', 'verified','can:das.categoria.index']) ;

Route::resource('producto', ProductosController::class)
->only('index','store','show')
->middleware(['auth', 'verified','can:das.productos.index']);

Route::resource('Eventos', EventosController::class)
->only('index','store','show')
->middleware(['auth', 'verified','can:das.eventos.index']);

Route::resource('DetalleUsers', DetalleUsersController::class)
->only('index','store','show')
->middleware(['auth', 'verified','can:das.config.index']);

Route::get('/', function () {
    $products = Productos::with('user')->latest()->get();
    $categoris = categoria::with('user')->latest()->get();
    $detalleUsr = detalleUsers::with('user')->latest()->get();

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'productos'=>  ProductoResource::collection($products),
        'categorias'=>  CategoriaResource::collection( $categoris),
        'detalleuser'=>  DetalleuserResource::collection( $detalleUsr),
    ]);
});

Route::get('/dashboard', function () {
  $products = Productos::with('user')->latest()->get();
  $detalleUsr = detalleUsers::with('user')->latest()->get();
    return Inertia::render('Dashboard', [
        'productos'=>  ProductoResource::collection($products),
        'detalleuser'=>  DetalleuserResource::collection( $detalleUsr),

           ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/Contact', function () {
   $detalleUsr = detalleUsers::with('user')->latest()->get();
    return Inertia::render('Contact/Contact',[
  'detalleuser'=>  DetalleuserResource::collection( $detalleUsr),
        ]);
})->middleware(['auth', 'verified'])->name('contactoduroH');

Route::get('/About', function () {
    return Inertia::render('Nosotros/About');
})->middleware(['auth', 'verified'])->name('Nosotros');

Route::get('/Event', function () {
      $Eventos = eventos::with('user')->latest()->get();
      $detalleUsr = detalleUsers::with('user')->latest()->get();
    return Inertia::render('Eventos/Eventos',[
       'eventos'=>  EventoResource::collection($Eventos),
       'detalleuser'=>  DetalleuserResource::collection( $detalleUsr),

]);
})->middleware(['auth', 'verified'])->name('Eventos');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/variable',[ProductosController::class  ,'variableWompy']);

require __DIR__.'/auth.php';
