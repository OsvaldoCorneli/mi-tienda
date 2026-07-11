import React from 'react';
import { useCart } from '../../context/CartContext'; // 1. Importamos el hook
import { Link } from 'react-router-dom';
const Cart = () => {

    const { cart, clearCart, getCartTotal } = useCart();
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
        <div>
            <h1>Carrito de Compras</h1>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <h4>{item.name}</h4>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio unitario: ${item.price}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                    <hr />
                </div>
            ))}
            <hr />
            <h3>Total a pagar: ${getCartTotal()}</h3>
            <button onClick={clearCart} className="btn-vaciar">Vaciar
                Carrito</button>
            <Link to="/" onClick={() => {
                alert("Gracias por comprar")
                clearCart()
                }} className="btn-finalizar">
                Finalizar Compra
            </Link>
        </div>
    );
};
export default Cart;