import CamposProd from "@/Components/Productos/CamposProd";
import ListaProd from "@/Components/Productos/ListaProd";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function ProdIndex({ auth, productos, categorias }) {
    console.log(categorias);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Productos
                </h2>
            }
        >
            <Head title="Productos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <CamposProd categorias={categorias}></CamposProd>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
