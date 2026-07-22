import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductDetails.module.css";
import { useCart } from "../../context/CartContext.jsx";
import { useProducts } from "../../context/ProductsContext.jsx";
import ProductsSimilar from "../ProductsSimilar/ProductsSimilar.jsx";

function ProductDetails() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [prodSimilares, setProdSimilares] = useState([]);
  const [error, setError] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const { addToCart, getCantidadActual } = useCart();
  const { products, loading, getProductById, getProductsSimilar } =
    useProducts();

  const handleAddToCart = () => {
    addToCart(producto, cantidad);
    alert(`Agregaste el producto ${name} al carrito.`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (products.length > 0) {
      const product = getProductById(id);
      setProducto(product);

      if (Object.keys(product).length > 0) {
        const productsSimilar = getProductsSimilar(
          product.category,
          product.productType,
          product.id
        );
        setProdSimilares(productsSimilar);
      }
    } 
  }, [id, products]);
  
  function calcularOferta(precio, descuento) {
    const precioConDescuento = parseInt(precio - (precio * descuento) / 100);

    return String(precioConDescuento);
  }

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  if (error) {
    return <span>{error}</span>;
  }
  console.log(prodSimilares)
  return (
    <article>
      <div className={style.div_container_1}> 
      <section className={style.seccion_img}>
        <img src={producto.image} alt="" />
        {producto.onSale ? <span>{`${producto.discount} OFF`}</span> : null}
      </section>
      <section className={style.seccion_info}>
        {!producto.onSale ? (
          <div className={style.seccion_price}>
            <h2>{producto.name}</h2>
            <p>{`$${producto.price}`}</p>
          </div>
        ) : (
          <div className={style.seccion_price_onSale}>
            <h2>{producto.name}</h2>
            <p>{`$${producto.price}`}</p>
            <span>{`$${calcularOferta(producto.price, producto.discount)}`}</span>
          </div>
        )}

        <div className={style.seccion_function}>
          <div className={style.seccion_button}>
            <button
              className={style.add_cart}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddToCart();
              }}
            >
              Agregar al carrito
            </button>
            <button className={style.buy_now}>Comprar ahora</button>
          </div>
          <div className={style.seccion_cantidad}>
            <p>{`Stock: ${producto.stock}`}</p>
            <div>
              {/* <p>Cantidad:</p>
                                <select>

                                    {Array.from({ length: producto.stock }, (_, i) => i + 1).map(num => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select> */}
              <button
                onClick={() => {
                  setCantidad(Math.min(producto.stock, cantidad + 1));
                }}
              >
                +
              </button>
              <p>{cantidad}</p>
              <button
                onClick={() => {
                  setCantidad(Math.max(1, cantidad - 1));
                }}
              >
                -
              </button>
            </div>
          </div>
          <p className={style.description_detail}>{producto.description}</p>
        </div>
      </section>
      </div>
      <div className={style.div_container_2}>
        <h2>Productos Similares</h2>
        <br />
        {
          prodSimilares
          ? prodSimilares.map(item => (
            <ProductsSimilar
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            
            />
          ))
          : null
        }

      </div>
    </article>
  );
}

export default ProductDetails;
