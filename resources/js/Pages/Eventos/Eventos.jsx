import FormEventos from "@/Components/Eventos/FormEventos";
import Footer from "@/Components/Footer";
import Navbarleft from "@/Components/Util/Navbarleft";
import { Head } from "@inertiajs/react";

export default function Eventos({ eventos, auth }) {
    return (
        <>
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <Navbarleft auth={auth} />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <main className=" mt-4">
                            <Head title="Eventos" />
                            <div>
                                {eventos.map((event, index) => (
                                    <FormEventos
                                        key={event.id}
                                        titulo={event.titulo}
                                        desc={event.Descripcion}
                                        fecha={event.fecha}
                                    />
                                ))}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                <Footer />
            </footer>
        </>
    );
}
