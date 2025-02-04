import { Link } from "@inertiajs/react";
import Footer from "../Footer";

export default function FormNosotros() {
    return (
        <>
            <section class="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid items-center grid-cols-1 md:grid-cols-2">
                        <div>
                            <h2 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                                Hola 👋 Somos Duro
                                <br class="block sm:hidden" />
                                Herrajes
                            </h2>
                            <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                                DURO HERRAJES es una empresa dedicada a la venta
                                de artículos para motoviajeros , así también
                                ofrecermos asesoramiento en viajes, rutas y todo
                                lo relacionado para que tengas la mejor
                                experiencia MOTERA.
                            </p>

                            <p class="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                                <span class="relative inline-block">
                                    <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                                    <span class="relative">
                                        {" "}
                                        Tienes alguna pregunta..?{" "}
                                    </span>
                                </span>
                                <br class="block sm:hidden" />
                                <br />
                                Contactanos via{" "}
                                <a
                                    href="https://www.whatsapp.com/catalog/573104820160/?app_absent=0"
                                    title=""
                                    class="transition-all duration-200 text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-500 hover:underline"
                                >
                                    Whatsapp
                                </a>
                            </p>
                        </div>

                        <div class="relative">
                            <img
                                class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                                alt=""
                            />

                            <img
                                class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                <Footer />
            </footer>
        </>
    );
}
