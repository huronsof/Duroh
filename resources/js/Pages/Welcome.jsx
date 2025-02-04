import Footer from "@/Components/Footer";
import ListaProd from "@/Components/Productos/ListaProd";
import ListaMenu from "@/Components/Util/ListaMenu";
import Navbarleft from "@/Components/Util/Navbarleft";
import { Link, Head } from "@inertiajs/react";
import { useState } from "react";

export default function Welcome({ auth, productos, detalleuser }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    function busquedacat(e) {
        return e;
    }
    console.log(detalleuser[0]);

    return (
        <>
            <Head title="Duro Herrajes" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <Navbarleft auth={auth} logo={detalleuser[0].logo} />
                        <main className=" mt-4">
                            <div className="grid gap-6 lg:grid-cols-1 lg:gap-8">
                                <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                                    <div class="absolute inset-0">
                                        <img
                                            src={detalleuser[0].banner1}
                                            alt="Background Image"
                                            class="object-cover object-center w-full h-full"
                                        />
                                        <div class="absolute inset-0 bg-black opacity-50"></div>
                                    </div>

                                    <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
                                        <h1 class="text-5xl font-bold leading-tight mb-4">
                                            {detalleuser[0].titulo1}
                                        </h1>
                                        <p class="text-lg text-gray-300 mb-8">
                                            {detalleuser[0].subtitulo1}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid flex-grow md:grid-cols-3 lg:grid-cols-4  gap-5 max-w-7xl mx-auto mt-5">
                                {productos.map((product, index) => (
                                    <ListaMenu
                                        alias={product.alias}
                                        categ={
                                            productos[index].data_product[0]
                                                .categoria
                                        }
                                        desc={product.Descripcion}
                                        created_at={product.created_at}
                                        auth={auth.user}
                                        image1={product.image1}
                                        image2={product.image2}
                                        image3={product.image3}
                                        image4={product.image4}
                                        image5={product.image5}
                                        logoprod={detalleuser[0].logoprod}
                                        $producto={product}
                                    />
                                ))}
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            <Footer
                                nombre={detalleuser[0].nombre}
                                facebook={detalleuser[0].facebook}
                                whatsapp={detalleuser[0].whatsapp}
                                instagram={detalleuser[0].instagram}
                                titok={detalleuser[0].titok}
                            />
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
