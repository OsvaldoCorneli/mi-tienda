import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import SkeletonContainer from "../SkeletonContainer/SkeletonContainer.jsx";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config.js';
function ItemListContainer({ mensaje, onSales }) {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

      useEffect(() => {
            const prodDB = collection(db, "productos")
            getDocs(prodDB).then((resp) => {
                setProducts(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                );
                setLoading(false)
            })
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