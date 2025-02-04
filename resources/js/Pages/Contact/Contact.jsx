import Formcontact from "@/Components/Contact/FormContact";
import Navbarleft from "@/Components/Util/Navbarleft";
import { Head } from "@inertiajs/react";

export default function Contact({ auth }) {
    return (
        <>
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <Navbarleft auth={auth} />
                        <main className=" mt-4">
                            <Head title="Contactanos" />
                            <Formcontact />
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
