import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './ProductDetails.module.css'



function ProductDetails() {

    const { id } = useParams();
    const [producto, setProducto] = useState({})
    const [prodSimilares, setProdSimilares] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch('/data/products.json')
            .then((response) => {

                if (!response.ok) {
                    throw new Error("No se pudo cargar los productos");
                }

                return response.json()

            })
            .then((data) => {

                const productoEncontrado = data.find(prod => prod.id === id.toUpperCase())

                if(!productoEncontrado){
                    setProducto(null)
                    setProdSimilares([])
                    setLoading(false)
                }

                const productosSimilares = data.filter(
                    prod => (prod.productType === productoEncontrado.productType) && (prod.id != productoEncontrado.id)
                );

                  

                setTimeout(() => {

                    setProducto(productoEncontrado)
                    setProdSimilares(productosSimilares)
                    setLoading(false)

                
                }, 2000)

            })
            .catch((error) => {

                setError(error.message);
                setLoading(false);

            });

    }, [id])


    function calcularOferta(precio, descuento) {

        const precioConDescuento = parseInt(precio - (precio * descuento) / 100)

        return String(precioConDescuento)

    }

    if(loading){
        return <p>Cargando...</p>
    }

    if(!producto){
        return <p>Producto no encontrado</p>
    }

    if(error){
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