import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductDetails.module.css";
import { useCart } from "../../context/CartContext.jsx";
import { useProducts } from "../../context/ProductsContext.jsx";
import ProductsSimilar from "../ProductsSimilar/ProductsSimilar.jsx";
import { calcularOferta, formatearPrecio } from "../../utils/functions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";




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
          product.id,
        );
        setProdSimilares(productsSimilar);
      }
    }
  }, [id, products]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  if (error) {
    return <span>{error}</span>;
  }

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
              <p>{`$${formatearPrecio(producto.price)}`}</p>
            </div>
          ) : (
            <div className={style.seccion_price_onSale}>
              <h2>{producto.name}</h2>
              <p>{`$${formatearPrecio(producto.price)}`}</p>
              <span>{`$${formatearPrecio(calcularOferta(producto.price, producto.discount))}`}</span>
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
              <div className={style.seccion_cantidad_botones}>
                <a
                  onClick={() => {
                    setCantidad(Math.min(producto.stock, cantidad + 1));
                  }}
                >
                  <FontAwesomeIcon icon={faSquarePlus} className={style.icon_button}/>
                </a>
                <p>{cantidad}</p>
                <a
                  onClick={() => {
                    setCantidad(Math.max(1, cantidad - 1));
                  }}
                >
                <FontAwesomeIcon icon={faSquareMinus} className={style.icon_button}/>
                </a>
              </div>
            </div>
            <p className={style.description_detail}>{producto.description}</p>
          </div>
        </section>
      </div>
      <div className={style.div_container_2}>
        <h2>Productos Similares</h2>
        <section>
          {prodSimilares
            ? prodSimilares.map((item) => (
                <ProductsSimilar
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  onSale={item.onSale}
                  discount={item.discount}
                  formatearPrecio={formatearPrecio}
                  calcularOferta={calcularOferta}
                />
              ))
            : null}
        </section>
      </div>
    </article>
  );
}

export default ProductDetails;
