import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
export default function ListaMenu({
    auth,
    desc,
    alias,
    categoria,
    created_at,
    $producto,
    categ,
    image1,
    logoprod,
    image2,
    image3,
    image4,
    image5,
}) {
    ///  const NomeCategoria = categ.find(categ);

    //
    //   console.log(categ);
    return (
        <article class="bg-white shadow rounded overflow-hidden flex flex-col">
            <div class="space-y-3  flex-1 p-12">
                <div class="h-52">
                    {image1 ? (
                        <img
                            className="flex rounded-1xl col-start-2 "
                            id="logo"
                            src={image1}
                            alt=""
                        />
                    ) : (
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
                    )}
                </div>
            </div>
            <div class="space-y-3 p-5 flex-1 ">
                <h3 class="lg:text-2xl lg:font-semibold lg:text-sky-500 min-[320px]:text-2xl  min-[320px]:text-sky-500 min-[320px]:bg-slate-300   lg:bg-transparent ">
                    {alias}
                </h3>
                <h2 class="text-l capitalize text-slate-500 font-semibold leading-tight min-[320px]:bg-transparen">
                    {categ}
                </h2>
                <p className="text-slate-500 text-justify hidden md:block">
                    {desc}
                </p>
            </div>
            <div class="flex space-x-2 p-5 justify-between">
                <a class="hover:rotate-6 hover:text-blue-700 " href="/">
                    <img
                        className="flex rounded-1xl lg:col-start-2 "
                        id="logo"
                        src={logoprod}
                    />
                </a>
                <div class="flex flex-col justify-center">
                    <span class="text-sm font-semibold leading-4 text-slate-600 min-[320px]:text-black">
                        Duro Herrajes
                    </span>
                    <span class="text-sm font-semibold leading-4 min-[320px]:text-black lg:text-slate-500    ">
                        {created_at}
                    </span>
                </div>
                <button>
                    {auth ? (
                        <Link
                            className="rounded-md justify-between bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            href={route("producto.show", $producto)}
                        >
                            comprar
                        </Link>
                    ) : (
                        <>
                            <Link
                                className="rounded-md justify-between bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                href={route("register")}
                            >
                                Ingresa
                            </Link>
                        </>
                    )}
                </button>
            </div>
        </article>
    );
}
