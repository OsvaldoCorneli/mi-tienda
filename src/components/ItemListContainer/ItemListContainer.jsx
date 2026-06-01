import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import SkeletonContainer from "../SkeletonContainer/SkeletonContainer";
function ItemListContainer({ mensaje, onSales }) {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("/data/products.json")

            .then((response) => {

                if (!response.ok) {
                    throw new Error("No se pudo cargar los productos");
                }

                return response.json();

            })

            .then((data) => {

                setTimeout(() => {

                    setProducts(data);
                    setLoading(false);

                }, 1000);

            })

            .catch((error) => {

                setError(error.message);
                setLoading(false);

            });

    }, []);



    function calcularOferta(precio, descuento) {

        const precioConDescuento = parseInt(precio - (precio * descuento) / 100)

        return String(precioConDescuento)

    }


    const formatearPrecio = (precioString) => {
        const numero = Number(precioString);

        // 'de-DE' usa el punto como separador de miles
        return new Intl.NumberFormat('de-DE').format(numero);
    };

    return (
        <>
            {loading
                ? <SkeletonContainer />
                : <ItemList products={products}
                    onSales={onSales}
                    mensaje={mensaje}
                    precioFinal={calcularOferta}
                    formatearPrecio={formatearPrecio}
                />}
        </>
    );


}

export default ItemListContainer;