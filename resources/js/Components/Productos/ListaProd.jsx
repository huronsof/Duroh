import { Link } from "@inertiajs/react";

export default function ListaProd({ producto }) {
    return (
        <article class="bg-white shadow rounded overflow-hidden flex flex-col">
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-full h-full object-cover object-center"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                </svg>
            </div>
            <div class="space-y-3 p-5 flex-1">
                <h3 class="text-sm font-semibold text-sky-500">
                    {producto.categoria}
                </h3>
                <h2 class="text-xl text-slate-800 font-semibold leading-tight">
                    {producto.alias}
                </h2>
                <p class="text-slate-500 hidden md:block">
                    {producto.Descripcion}
                </p>
            </div>
            <div class="flex space-x-2 p-5">
                <a class="hover:rotate-6 hover:text-blue-700 " href="/">
                    <img
                        className="flex rounded-3xl lg:col-start-2 "
                        id="logo"
                        src="..../img/DH.png"
                    />
                </a>
                <div class="flex flex-col justify-center">
                    <span class="text-sm font-semibold leading-4 text-slate-600">
                        Duro Herrajes
                    </span>
                    <span class="text-sm font-semibold leading-4 text-slate-500">
                        {producto.created_at}
                    </span>
                </div>
            </div>
        </article>
    );
}
