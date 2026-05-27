import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
function ItemListContainer({mensaje, onSales}) {
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("No se pudo cargar los productos");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    
    function calcularOferta(precio, descuento){
    
        const precioConDescuento = parseInt(precio - (precio*descuento)/100)
        
        return String(precioConDescuento)
    
    }


    return (
        <>  
            <ItemList products={products} 
            onSales={onSales}
            mensaje={mensaje}
            precioFinal={calcularOferta}
            />
        </>
    );


}

export default ItemListContainer;