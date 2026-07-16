import { Link } from 'react-router-dom';
import style from './Item.module.css'
import { useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';

function Item({ id, name, precioFinal, price, discount, image, stock, onSale, formatearPrecio }) {
    
    const producto = { id, name, price ,precioFinal, discount, image, stock, onSale };
    const [cantidad, setCantidad] = useState(1);

    const { addToCart , getCantidadActual} = useCart();
    
    const handleAddToCart = () => {
        addToCart(producto, cantidad);
        alert(`Agregaste el producto ${name} al carrito.`);
    };

    console.log(precioFinal, 'Preciofinal')
    console.log(price, "price")
    console.log(typeof(precioFinal), 'TO PF')
    console.log(typeof(price), "TO pri")

    return (

        <Link className={style.item_card} to={`/productos/${id}`}>

            <section >
                {image
                    ?
                    <img
                        src={image}
                    />
                    :
                    <img
                        src='https://www.shannonfj.com/wp-content/themes/divide-3.3/media/product-placeholder.jpg'

                    />}
            </section>


            {!onSale
                ? <section className={style.card_info}>
                    <p className={style.name}>{name}</p>
                    <span className={style.price}>{`$${formatearPrecio(price)}`}</span>
                </section>
                : <section className={style.card_info_onSale}>
                    <p>{name}</p>
                    <div className={style.not_price}>{`$${formatearPrecio(price)}`}</div>
                    <span>{`$${formatearPrecio(precioFinal(price, discount))}`}</span>

                </section>



            }

            {onSale && <span className={style.span_off}>
                {`${discount}% OFF `}
            </span>}

            {stock <= 5 && stock > 1
                ? <span className={style.stock}>{`⚠️¡Últimas ${stock} unidades!`}</span>
                : stock == 1
                    ? <span className={style.stock}>{`⚠️¡Última unidad!⚠️`}</span>
                    : <span className={style.stock_vacio}></span>
            }

            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleAddToCart()
                }}
            >
                Agregar al carrito
            </button>
        </Link>
    )

}

export default Item;