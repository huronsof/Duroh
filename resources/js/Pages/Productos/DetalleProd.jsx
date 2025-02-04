import { Link } from "@inertiajs/react";
import DetalleMenu from "../../Components/Util/DetalleMenu";
import Navbarleft from "@/Components/Util/Navbarleft";

export default function DetalleProd({
    dproductos,
    productos,
    auth,
    detalleuser,
}) {
    return (
        <div>
            <Navbarleft auth={auth} />
            <DetalleMenu
                alias={dproductos.alias}
                vli={dproductos.valor_venta}
                categoria={productos[0].data_product[0].categoria}
                desc={dproductos.Descripcion}
                created_at={dproductos.created_at}
                image1={dproductos.image1}
                image2={dproductos.image2}
                image3={dproductos.image3}
                image4={dproductos.image4}
                image5={dproductos.image5}
                detalleuser={detalleuser}
            />
            ;
        </div>
    );
}
