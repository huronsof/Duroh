import { useState } from "react";
import Btn from "../Util/Btn";
import { useForm } from "@inertiajs/react";

export default function CamposProd({ categorias }) {
    const [Imagenes, setimagenes] = useState();
    const { data, setData, post, reset, errors, processing } = useForm({
        nome: "",
        alias: "",
        cate: "",
        descripcion: "",
        stock: 0,
        vunit: 0,
        vventa: 0,
        activo: "",
        image: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        //console.log("aqui 1");
        //  console.log(errors);
        // setProcessing(true);

        post(route("producto.store"), {
            onSuccess: () => reset(),
            preserveState: false,
        });
    }

    return (
        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <section className="max-w-xl">
                <header>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Informacion de Productos
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Aqui debera agregar la informacion para un nuevo
                        producto
                    </p>
                </header>
                <form
                    className="mt-6 space-y-6"
                    onSubmit={handleSubmit}
                    enctype="multipart/form-data"
                >
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        for="multiple_files"
                    >
                        Upload multiple files
                    </label>

                    <div class="flex items-center justify-center w-full">
                        <label
                            for="image"
                            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span class="font-semibold">
                                        Click to upload
                                    </span>{" "}
                                    or drag and drop
                                </p>
                                {Imagenes ? (
                                    <p class="text-xs text-gray-500 dark:text-gray-400">
                                        IMAGENES CARGADAS CON EXITO(
                                        {Imagenes.length})
                                    </p>
                                ) : (
                                    <p class="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                                    </p>
                                )}
                            </div>
                            <input
                                id="image"
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={(e) =>
                                    setData("image", e.target.files)
                                }
                                class="hidden"
                            />
                        </label>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Nombre
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            value={data.nome}
                            onChange={(e) => setData("nome", e.target.value)}
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                        {errors.nome && <p>Please enter number for age.</p>}
                    </div>
                    <div>
                        <label
                            //    for="alias"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Alias
                        </label>
                        <input
                            id="alias"
                            required=""
                            //    autocomplete="alias"
                            type="text"
                            value={data.alias}
                            onChange={(e) => setData("alias", e.target.value)}
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //   for="categoria"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Categoria
                        </label>
                        <select
                            id="cate"
                            class="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={data.cate}
                            onChange={(e) => setData("cate", e.target.value)}
                        >
                            <option selected>Seleccione una categoria</option>
                            {categorias.map((catego, index) => (
                                <option value={catego.id}>
                                    {catego.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label
                            //   for="descripcion"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Descripcion
                        </label>
                        <input
                            id="descripcion"
                            required={true}
                            //   autocomplete="descripcion"
                            type="text"
                            value={data.descripcion}
                            onChange={(e) =>
                                setData("descripcion", e.target.value)
                            }
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //    for="stock"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Stock
                        </label>
                        <input
                            id="stock"
                            required={true}
                            //   autocomplete="stock"
                            type="number"
                            value={data.stock}
                            onChange={(e) => setData("stock", e.target.value)}
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //   for="vunit"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Valor Unitario
                        </label>
                        <input
                            id="vunit"
                            required=""
                            //  autocomplete="vunit"
                            type="number"
                            value={data.vunit}
                            onChange={(e) => setData("vunit", e.target.value)}
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //   for="vventa"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Valor Venta
                        </label>
                        <input
                            id="vventa"
                            required={true}
                            //   autocomplete="vventa"
                            type="number"
                            value={data.vventa}
                            onChange={(e) => setData("vventa", e.target.value)}
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //    for="activo"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Activar
                        </label>
                        <input
                            id="activo"
                            required=""
                            //    autocomplete="activo"
                            type="Checkbox"
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
