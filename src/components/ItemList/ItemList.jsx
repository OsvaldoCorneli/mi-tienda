import Item from "../Item/Item";
import ItemListCss from "./ItemList.module.css"
function ItemList({ products, onSales, mensaje, stock ,precioFinal, formatearPrecio}) {


   

    return (
        <>
            <h2>{mensaje}</h2>
            <article className={ItemListCss.cardsContainer}>
            {
                !onSales
                    ? products.map((element) => (
                       element.onSale
                            ? <Item
                                key={element.id}
                                id={element.id}
                                name={element.name}
                                price={formatearPrecio(element.price)}
                                stock={element.stock}
                                discount={element.discount}
                                onSale={element.onSale}
                                image={element.image}
                                precioFinal={formatearPrecio(precioFinal(element.price, element.discount))}
                            />
                            :  <Item
                            key={element.id}
                            id={element.id}
                            name={element.name}
                            price={formatearPrecio(element.price)}
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
                                price={formatearPrecio(element.price)}
                                stock={element.stock}
                                discount={element.discount}
                                image={element.image}
                                onSale={element.onSale}
                                precioFinal={formatearPrecio(precioFinal(element.price, element.discount))}
                            />
                            : null
                    ))
            }
            </article>
        </>
    )

}

export default ItemList;

