import { useState } from "react";
import Btn from "../Util/Btn";
import axios from "axios";
import InputError from "../InputError";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";

export default function CamposCtg() {
    const [CheckboxState1, setCheckboxState1] = useState(false);
    const [CheckboxState2, setCheckboxState2] = useState(false);

    const { data, setData, post, reset, errors, processing } = useForm({
        nome: "",
        activo: "",
        rifa_pro: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("categoria.store"), {
            onSuccess: () => reset(),
            preserveState: false,
        });
    }

    return (
        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <section className="max-w-xl">
                <header>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Informacion de Categorias
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Aqui debera agregar la informacion para una nueva
                        Categoria (ejemplo : Nuevo,Usado,etc)
                    </p>
                </header>
                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label
                            //      for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Nombre
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //     autocomplete="name"
                            type="text"
                            value={data.nome}
                            onChange={(e) => setData("nome", e.target.value)}
                            className="border-gray-300  uppercase dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div className="flex flex-row w-auto h-auto gap-6">
                        <div className="flex flex-col items-center">
                            <label
                                //   for="activo"
                                className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                            >
                                Rifa Basica
                            </label>
                            <input
                                id="activo"
                                required=""
                                //    autocomplete="activo"
                                type="Checkbox"
                                defaultChecked={CheckboxState1}
                                value={data.activo}
                                onChange={(e) =>
                                    setData("activo", e.target.checked)
                                }
                                className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-4"
                            ></input>
                        </div>
                        <div className="flex flex-col items-center">
                            <label
                                //   for="activo"
                                className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                            >
                                Rifa Profesional
                            </label>
                            <input
                                id="rifa_pro"
                                required=""
                                //    autocomplete="activo"
                                type="Checkbox"
                                defaultChecked={CheckboxState2}
                                value={data.rifa_pro}
                                onChange={(e) =>
                                    setData("rifa_pro", e.target.checked)
                                }
                                className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-4"
                            ></input>
                        </div>
                    </div>
                    <Btn Nome="Guardar" disable={processing}></Btn>
                </form>
            </section>
        </div>
    );
}
