import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config.js';
import style from './ProductDetails.module.css'



function ProductDetails() {

    const { id } = useParams();
    const [producto, setProducto] = useState({})
    const [prodSimilares, setProdSimilares] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true); // Acordate de resetear el loading si cambias de ID

    const docRef = doc(db, "productos", id);
    
    getDoc(docRef)
        .then((resp) => {
            if (resp.exists()) {
                const productoData = resp.data();
                // 1. Guardamos el producto principal con su ID
                setProducto({ ...productoData, id: resp.id });

                // 2. Buscamos los similares en Firebase usando la categoría de este producto
                const productosRef = collection(db, "productos");
                // Armamos la query: "Traeme los que tengan la misma categoría, pero que NO sean el mismo producto"
                const q = query(
                    productosRef, 
                    where("category", "==", productoData.category)
                );

                return getDocs(q); // Le pasamos la posta al siguiente .then
            } else {
                setProducto(null);
                setProdSimilares([]); // Si no hay producto, no hay similares
                setLoading(false);
            }
        })
        .then((querySnapshot) => {
            // Este .then maneja la respuesta de los productos similares
            if (querySnapshot) {
                const similares = [];
                querySnapshot.forEach((doc) => {
                    // Opcional: Evitá que el producto actual aparezca en la lista de similares
                    if (doc.id !== id) {
                        similares.push({ ...doc.data(), id: doc.id });
                    }
                });
                
                // Guardamos el array de productos similares en tu estado (que debería inicializar como [])
                setProdSimilares(similares);
                setLoading(false);
            }
        })
        .catch(error => {
            console.error("Error cargando datos:", error);
            setLoading(false);
        });

}, [id]);

    
    function calcularOferta(precio, descuento) {

        const precioConDescuento = parseInt(precio - (precio * descuento) / 100)

        return String(precioConDescuento)

    }

    if (loading) {
        return <p>Cargando...</p>
    }

    if (!producto) {
        return <p>Producto no encontrado</p>
    }

    if (error) {
        return <span>{error}</span>
    }


    return (

        < article >

            <section className={style.seccion_img}>
                <img src={producto.image} alt="" />
                <p>{producto.description}</p>
                {producto.onSale
                    ? <span>{`${producto.discount} OFF`}</span>
                    : ""
                }
            </section>
            <section>
                {
                    !producto.onSale
                        ? <div className={style.seccion_price}>
                            <h2>{producto.name}</h2>
                            <p>{`$${producto.price}`}</p>
                        </div>
                        : <div className={style.seccion_price_onSale}>
                            <h2>{producto.name}</h2>
                            <p>{`$${producto.price}`}</p>
                            <span>{`$${calcularOferta(producto.price, producto.discount)}`}</span>
                        </div>

                }

                <div className={style.seccion_function}>
                    <div className={style.seccion_cantidad}>
                        <p>{`Stock: ${producto.stock}`}</p>
                        <div>
                            <p>Cantidad:</p>
                            <select>

                                {Array.from({ length: producto.stock }, (_, i) => i + 1).map(num => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <div className={style.seccion_button}>
                        <button>Agregar al carrito</button>
                        <button>Comprar</button>
                    </div>
                </div>
            </section>

        </article >


    )

}


export default ProductDetails;