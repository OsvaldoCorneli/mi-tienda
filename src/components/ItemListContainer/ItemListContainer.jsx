import ItemList from "../ItemList/ItemList.jsx";
import SkeletonContainer from "../SkeletonContainer/SkeletonContainer.jsx";
import { useProducts } from "../../context/ProductsContext.jsx";

function ItemListContainer({ mensaje, onSales }) {

    const { products, loading } = useProducts();


    function calcularOferta(precio, descuento) {

        const precioConDescuento = parseInt(
            precio - (precio * descuento) / 100
        );

        return String(precioConDescuento);

    }


    const formatearPrecio = (precioString) => {

        const numero = Number(precioString);

        return new Intl.NumberFormat('de-DE').format(numero);

    };

   


    return (
        <>
            {
                loading
                    ? <SkeletonContainer />
                    :
                    <ItemList
                        products={products}
                        onSales={onSales}
                        mensaje={mensaje}
                        precioFinal={calcularOferta}
                        formatearPrecio={formatearPrecio}
                    />
            }
        </>
    );
}

export default ItemListContainer;