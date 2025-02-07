<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role  El rol a verificar
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $role)
    {
        // Verifica si el usuario autenticado tiene el rol requerido
        if (!$request->user() || !$request->user()->hasRole($role)) {
            return redirect('home');  // O cualquier redirección si el rol no coincide
        }

        return $next($request);
    }
}