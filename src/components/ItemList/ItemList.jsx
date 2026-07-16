import Item from "../Item/Item.jsx";
import style from "./ItemList.module.css"


function ItemList({ products, onSales, mensaje, stock ,precioFinal, formatearPrecio}) {

       
   

    return (
        <>
            <h2>{mensaje}</h2>
            <article className={style.cards_container}>
            {
                !onSales
                    ? products.map((element) => (
                       element.onSale
                            ? <Item
                                key={element.id}
                                id={element.id}
                                name={element.name}
                                price={element.price}
                                formatearPrecio={formatearPrecio}
                                stock={element.stock}
                                discount={element.discount}
                                onSale={element.onSale}
                                image={element.image}
                                precioFinal={precioFinal}
                            />
                            :  <Item
                            key={element.id}
                            id={element.id}
                            name={element.name}
                            price={element.price}
                            formatearPrecio={formatearPrecio}
                            stock={element.stock}
                            onSale={element.onSale}
                            discount={element.discount}
                            image={element.image}
                        />
                    ))

                    : products.map((element) => (

                        element.onSale
                            ? <Item
                                key={element.id}
                                id={element.id}
                                name={element.name}
                                price={element.price}
                                formatearPrecio={formatearPrecio}
                                stock={element.stock}
                                discount={element.discount}
                                image={element.image}
                                onSale={element.onSale}
                                precioFinal={precioFinal}
                                realprice={element.price}
                            />
                            : null
                    ))
            }
            </article>
        </>
    )

}

export default ItemList;

