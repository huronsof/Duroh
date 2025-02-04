import { useState } from "react";
import Btn from "../Util/Btn";
import { useForm } from "@inertiajs/react";

export default function CamposEventos() {
    const [CheckboxState1, setCheckboxState1] = useState(false);
    const { data, setData, post, reset, errors, processing } = useForm({
        titulo: "",
        descripcion: "",
        fecha: "",
        activo: 0,
    });
    function handleSubmit(e) {
        e.preventDefault();
        post(route("Eventos.store"), {
            onSuccess: () => reset(),
            preserveState: false,
        });
    }
    return (
        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <section className="max-w-xl">
                <header>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Informacion de Eventos
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Aqui debera agregar la informacion para un nuevo Evento
                    </p>
                </header>
                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Titulo
                        </label>
                        <input
                            id="titulo"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            value={data.titulo}
                            onChange={(e) => setData("titulo", e.target.value)}
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <label
                        for="descripcion"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Descripcion
                    </label>
                    <textarea
                        id="descripcion"
                        rows="4"
                        value={data.descripcion}
                        onChange={(e) => setData("descripcion", e.target.value)}
                        class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Describa los detalles del Evento"
                    ></textarea>
                    <label
                        for="descripcion"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Fecha de Finalizacion del evento
                    </label>

                    <div class="relative max-w-sm">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input
                            id="datepicker-autohide"
                            datepicker
                            datepicker-autohide
                            type="date"
                            value={data.fecha}
                            onChange={(e) => setData("fecha", e.target.value)}
                            class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Select fecha"
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-sm text-gray-700 dark:text-gray-300 ">
                            Activar
                        </label>
                        <input
                            id="activo"
                            required=""
                            type="Checkbox"
                            defaultChecked={CheckboxState1}
                            value={data.activo}
                            onChange={(e) =>
                                setData("activo", e.target.checked)
                            }
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-4"
                        ></input>
                    </div>
                    <Btn Nome="Guardar" disable={processing}></Btn>
                </form>
            </section>
        </div>
    );
}
