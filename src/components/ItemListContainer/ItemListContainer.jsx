import ItemList from "../ItemList/ItemList.jsx";
import SkeletonContainer from "../SkeletonContainer/SkeletonContainer.jsx";
import { useProducts } from "../../context/ProductsContext.jsx";
import { formatearPrecio, calcularOferta } from "../../utils/functions.js";

function ItemListContainer({ mensaje, onSales }) {

    const { products, loading } = useProducts();



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