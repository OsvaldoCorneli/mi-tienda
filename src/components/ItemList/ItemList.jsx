import Item from "../Item/Item";
import ItemListCss from "./ItemList.module.css"
function ItemList({ products, onSales, mensaje, stock ,precioFinal}) {


   

    return (
        <>
            <h2>{mensaje}</h2>
            <div className={ItemListCss.cardsConteiner}>
            {
                !onSales
                    ? products.map((element) => (
                       element.onSale
                            ? <Item
                                key={element.id}
                                id={element.id}
                                name={element.name}
                                price={element.price}
                                stock={element.stock}
                                discount={element.discount}
                                onSale={element.onSale}
                                image={element.image}
                                precioFinal={precioFinal(element.price, element.discount)}
                            />
                            :  <Item
                            key={element.id}
                            id={element.id}
                            name={element.name}
                            price={element.price}
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
                                stock={element.stock}
                                discount={element.discount}
                                image={element.image}
                                onSale={element.onSale}
                                precioFinal={precioFinal(element.price, element.discount)}
                            />
                            : null
                    ))
            }
            </div>
        </>
    )

}

export default ItemList;

