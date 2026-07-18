import React from "react";
import { useCart } from "../../context/CartContext.jsx"; // 1. Importamos el hook
import { Link } from "react-router-dom";
import style from "./Cart.module.css";
const Cart = () => {
  const { cart, clearCart, getCartTotal, deleteProduct, increaseQuantity } = useCart();
  // Si el carrito está vacío, mostramos un mensaje
  if (cart.length === 0) {
    return (
      <div>
        <h1>El carrito está vacío</h1>
        <p>Agregá productos para continuar la compra.</p>
        <Link to="/productos" className="btn-volver">
          Ver Productos
        </Link>
      </div>
    );
  }

  // Si hay productos, los mostramos con las opciones de finalizar y vaciar
  return (
    <>
      <h2>Carrito de compras</h2>

      <section className={style.cart}>
        <section className={style.info_cart_product}>
          <div className={style.info_cart_title}>
            <h4 className={style.product}>Producto</h4>
            <h4 className={style.price}>Precio</h4>
            <h4 className={style.quantity}>Cantidad</h4>
            <h4 className={style.total}>Total</h4>
            <h4>Eliminar</h4>
          </div>

          {cart.map((item) => (
            <div key={item.id} className={style.info_cart_prod}>
              <div className={style.product}>
                <img src={item.image} alt="" />
                <h4>{item.name}</h4>
              </div>
              <p className={style.price}>${item.price}</p>
              <div className={style.quantity}>
                <button onClick={()=> increaseQuantity(item.id, "decrement")}>-</button>
                <p>{item.quantity}</p>
                <button onClick={()=> increaseQuantity(item.id, "increase")}>+</button>
              </div>
              <p className={style.total}>{item.price * item.quantity}</p>
              <button onClick={() => deleteProduct(item.id)}>Eliminar</button>
            </div>
          ))}
        </section>
        <section className={style.info_cart_resume}>
          <h3>Resumen del pedido</h3>

          <p>Subtotal: {getCartTotal()}</p>
          <p>Envio: {10000}</p>
          <h3>Total: {getCartTotal() + 10000}</h3>
        </section>
      </section>
    </>
  );
};
export default Cart;

//     <h1>Carrito de Compras</h1>
//     {cart.map(item => (

//         <div key={item.id} className="cart-item">
//             <h4>{item.name}</h4>
//             <p>Cantidad: {item.quantity}</p>
//             <p>Precio unitario: ${item.price}</p>
//             <p>Subtotal: ${item.price * item.quantity}</p>
//             <hr />
//         </div>
//     ))}
//     <hr />
//     <h3>Total a pagar: ${getCartTotal()}</h3>
//     <button onClick={clearCart} className="btn-vaciar">Vaciar
//         Carrito</button>
//     <Link to="/" onClick={() => {
//         alert("Gracias por comprar")
//         clearCart()
//         }} className="btn-finalizar">
//         Finalizar Compra
//     </Link>
// </div>
