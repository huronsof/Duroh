import { useState } from "react";
import Btn from "../Util/Btn";
import { useForm } from "@inertiajs/react";

export default function Detusers() {
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
                        Configuracion General
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Aqui podra personalizar y adicionar los datos de su
                        Empresa
                    </p>
                </header>
                <form
                    className="mt-6 space-y-6"
                    enctype="multipart/form-data"
                    onSubmit={handleSubmit}
                >
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
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Direccion
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Telefono
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Celular
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Email
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="Email"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />
                        <div className="flex flex-row justify-center justify-items-center gap-3">
                            <div className="flex p-2  justify-center ">
                                <label
                                    //  for="name"
                                    className="block font-medium text-sm text-center text-gray-700 dark:text-gray-300 "
                                >
                                    Redes Sociales
                                </label>
                            </div>
                            <div className="flex justify-center ">
                                <svg
                                    class="w-[24px] h-[24px] fill-[#2d51be]"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"></path>
                                </svg>
                            </div>
                        </div>

                        <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Facebook
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Whatsapp
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Instagram
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>

                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Tiktok
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />
                        <div className="flex flex-row justify-center justify-items-center gap-3">
                            <div className="flex p-2  justify-center ">
                                <label
                                    //  for="name"
                                    className="block font-medium text-sm text-center text-gray-700 dark:text-gray-300 "
                                >
                                    Imagenes
                                </label>
                            </div>
                            <div className="flex justify-center ">
                                <svg
                                    class="w-[28px] h-[28px] fill-[#51a6c2]"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"></path>
                                </svg>
                            </div>
                        </div>

                        <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Logo
                        </label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input"
                            type="file"
                        />
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                        >
                            SVG, PNG, JPG or GIF (MAX. 800x400px).
                        </p>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Logo Productos
                        </label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input"
                            type="file"
                        />
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                        >
                            SVG, PNG, JPG or GIF (MAX. 800x400px).
                        </p>
                    </div>
                    <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Banner 1
                        </label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input"
                            type="file"
                        />
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                        >
                            SVG, PNG, JPG or GIF (MAX. 800x400px).
                        </p>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Texto Banner 1
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Sub texto Banner 1
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Banner 2
                        </label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input"
                            type="file"
                        />
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                        >
                            SVG, PNG, JPG or GIF (MAX. 800x400px).
                        </p>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Texto Banner 2
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Sub texto Banner 2
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Banner 3
                        </label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input"
                            type="file"
                        />
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                        >
                            SVG, PNG, JPG or GIF (MAX. 800x400px).
                        </p>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Texto Banner 3
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Sub texto Banner 3
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Banner 4
                        </label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input"
                            type="file"
                        />
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                        >
                            SVG, PNG, JPG or GIF (MAX. 800x400px).
                        </p>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Texto Banner 4
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Sub texto Banner 4
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Banner 5
                        </label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input"
                            type="file"
                        />
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                        >
                            SVG, PNG, JPG or GIF (MAX. 800x400px).
                        </p>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Texto Banner 5
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Sub texto Banner 5
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Banner 6
                        </label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input"
                            type="file"
                        />
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                        >
                            SVG, PNG, JPG or GIF (MAX. 800x400px).
                        </p>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Texto Banner 6
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <div>
                        <label
                            //  for="name"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 "
                        >
                            Sub texto Banner 6
                        </label>
                        <input
                            id="nome"
                            required={true}
                            //   autocomplete="name"
                            type="text"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        ></input>
                    </div>
                    <Btn Nome="Guardar"></Btn>
                </form>
            </section>
        </div>
    );
}
