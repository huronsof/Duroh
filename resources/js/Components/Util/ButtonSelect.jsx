/**
 *  button cantidad
 * @param {*} number  number que aparece en el boton
 * @param {*} onclick accion del boton
 * @param {*} cantidad estado que se evalua para determinar el diseño
 * @returns void
 */
export const ButtonSelect = () => {
    return (
        <button
            // className={`flex items-center justify-center rounded-md border  py-3 px-4 text-sm font-medium uppercase  focus:outline-none sm:flex-1 cursor-pointer  shadow-sm ${
            //     1 === 1
            //         ? `text-white bg-slate-600`
            //         : `text-gray-900 bg-white hover:bg-gray-50 `
            // }`}
            className="bg-red-500 h-10 w-10"
            type="button"
            id="btn1"
            // onClick={onclick}

            // disabled={inactivo}
        >
            {/* {number} */}
            numero
        </button>
    );
};
