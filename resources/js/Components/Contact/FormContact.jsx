import { Link } from "@inertiajs/react";
import Footer from "../Footer";

export default function Formcontact() {
    return (
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Contacto Duro Herrajes
                    </h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        ¿Tienes un problema? ¿Quieres enviar comentarios sobre
                        un producto / rifa ?. Premitenos tener el gusto de
                        porder darte una pronta respuesta.
                    </p>
                    <form action="#" class="space-y-8">
                        <div>
                            <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Ingresa tu email
                            </label>
                            <input
                                type="email"
                                id="email"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Email@Duroherrajes.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                for="subject"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="subject"
                                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Permítenos saber como llamarte"
                                required
                            />
                        </div>
                        <div class="sm:col-span-2">
                            <label
                                for="message"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Ingresa tu peticion / queja
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tu opinion es muy valiosa para nosotros ..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg shadow-blue-500/50"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </section>
            <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                <Footer />
            </footer>
        </>
    );
}
