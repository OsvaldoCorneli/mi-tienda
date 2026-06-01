import { Link } from 'react-router-dom';
import style from './Item.module.css'


function Item({ id, name, precioFinal, price, discount, image, stock, onSale }) {
    return (

        <Link className={style.item_card} to={`/productos/${id.toLowerCase()}`}>

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
                    <span className={style.price}>{`$${price}`}</span>
                </section>
                : <section className={style.card_info_onSale}>
                    <p>{name}</p>
                    <div className={style.not_price}>{`$${price}`}</div>
                    <span>{`$${precioFinal}`}</span>

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

            <a href="">Agregar al Carrito</a>

        </Link>
    )

}

export default Item;