import { Link, Head } from "@inertiajs/react";
import Galeriafot from "./GaleriaFot";
import Incremental from "./Incremental";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

/**
 *  button cantidad
 * @param {*} numero  number que aparece en el boton
 * @param {*} onclick accion del boton
 * @param {*} cantidad estado que se evalua para determinar el diseño
 * @returns void
 */
const ButtonSelect = ({ numero, onclick, cantidad }) => {
    return (
        <button
            className={`flex items-center justify-center rounded-md border  py-3 px-4 text-sm font-medium uppercase  focus:outline-none sm:flex-1 cursor-pointer  shadow-sm ${
                cantidad === numero
                    ? `text-white bg-slate-600`
                    : `text-gray-900 bg-white hover:bg-gray-50 `
            }`}
            type="button"
            onClick={onclick}
        >
            {numero}
        </button>
    );
};

export default function DetalleMenu({
    alias,
    vli,
    categoria,
    desc,
    image1,
    image2,
    image3,
    image4,
    image5,
    detalleuser,
    created_at,
    publicKey, // La llave pública enviada desde el backend
}) {
    const [Valortotal, setValortotal] = useState(1);
    const [Valorcombo, setValorcombo] = useState(0);
    const [inactivo, setinactivo] = useState(false);
    const [btnCantidad, setbtnCantidad] = useState(0);
    const [apikey, setApykey] = useState();
    const cantidad = (valort) => {
        setValortotal(valort);
    };

    // seleccion de cantidad
    function handleClick(number) {
        setbtnCantidad(number);
    }

    function handleDoubleClick() {
        setinactivo(false);
        setValorcombo(0);
    }
    const variableEnt = async () => {
        const data = await fetch("/variable");
        const valor = await data.json();
        setApykey(valor.wompy);
    };
    useEffect(() => {
        variableEnt();
    }, []);
    return (
        <div>
            <div className="sm:grip sm:grid-cols-2  lg:grid lg:grid-rows-1 ml-3 mb-2">
                <div className="rounded-2xl ml-3 mt-3">
                    <Galeriafot
                        imag1={image1}
                        imag2={image2}
                        imag3={image3}
                        imag4={image4}
                        imag5={image5}
                    />
                </div>
                <div className="flex h-auto justify-center mt-4">
                    <div className="grid grid-flow-col pb-2 gap-2 p-2 shadow-xl rounded-2xl bg-slate-50 w-96 mt-2">
                        <div className="lg:w-full sm:w-full sm:col-span-8 lg:col-span-7 p-2 mt-3 gap-y-4 h-full">
                            <h2 className="text-4xl font-bold text-blue-500 sm:pr-12 text-transform: uppercase">
                                {alias}
                            </h2>
                            <h3 className="text-slate-500 capitalize">
                                {categoria}
                            </h3>
                            <section
                                aria-labelledby="information-heading"
                                className="lg:flex log:flex-row sm:flex-col mt-2 lg:gap-y-4"
                            >
                                <div>
                                    <p className="text-3xl text-gray-900 sm:mt-5">
                                        $
                                        {btnCantidad > 0
                                            ? btnCantidad * vli
                                            : Valortotal * vli}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-justify">
                                        {desc}
                                    </p>
                                </div>
                            </section>
                            <section
                                aria-labelledby="options-heading"
                                className="mt-10"
                            >
                                <form
                                    action="https://checkout.wompi.co/p/"
                                    method="GET"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Incremental cantidad={cantidad} />
                                        </div>
                                    </div>

                                    <div className="mt-4 grid grid-cols-4 gap-4">
                                        {[10, 20, 40, 60, 80, 100].map(
                                            (cantidad) => (
                                                <ButtonSelect
                                                    key={cantidad}
                                                    numero={cantidad}
                                                    onclick={() => {
                                                        btnCantidad === cantidad
                                                            ? handleClick(0)
                                                            : handleClick(
                                                                  cantidad
                                                              );
                                                    }}
                                                    cantidad={btnCantidad}
                                                />
                                            )
                                        )}
                                    </div>

                                    <input
                                        type="hidden"
                                        name="public-key"
                                        value={apikey}
                                    />
                                    <input
                                        type="hidden"
                                        name="currency"
                                        value="COP"
                                    />
                                    <input
                                        type="hidden"
                                        name="shipping-address:country"
                                        value="CO"
                                    />
                                    <input
                                        type="hidden"
                                        name="amount-in-cents"
                                        value={
                                            (btnCantidad > 0
                                                ? btnCantidad * vli
                                                : Valortotal * vli) * 100
                                        }
                                    />
                                    <input
                                        type="hidden"
                                        name="reference"
                                        value={v4()}
                                    />
                                    <input
                                        type="hidden"
                                        name="redirect-url"
                                        value="http://localhost:8000/producto/status"
                                    />
                                    <input
                                        type="hidden"
                                        name="customer-data:phone-number"
                                        value={detalleuser?.[0]?.telefono || ""}
                                    />
                                    <input
                                        type="hidden"
                                        name="shipping-address:address-line-1"
                                        value={
                                            detalleuser?.[0]?.direccion || ""
                                        }
                                    />
                                    <input
                                        type="hidden"
                                        name="shipping-address:city"
                                        value="CALI"
                                    />
                                    <input
                                        type="hidden"
                                        name="shipping-address:region"
                                        value="VALLE DEL CAUCA"
                                    />
                                    <input
                                        type="hidden"
                                        name="shipping-address:phone-number"
                                        value={detalleuser?.[0]?.celular || ""}
                                    />
                                    <button
                                        type="submit"
                                        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg shadow-blue-500/50"
                                    >
                                        Comprar
                                    </button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
