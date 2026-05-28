import itemCss from './Item.module.css'


function Item({id,name,precioFinal, price, discount, image, stock, onSale}) {
    return (

          <div className={itemCss.card}>
            
                <div className={itemCss.image}>
                {image 
                ? 
                <img
                    src={image}
                        />
                :
                <img
                    src='https://www.shannonfj.com/wp-content/themes/divide-3.3/media/product-placeholder.jpg'
        
                />}
                </div>
                
                
                {!onSale 
                ? <div className={itemCss.info}>
                    <h3 className={itemCss.name}>{name}</h3>
                    <h3 className={itemCss.price}>{`$${price}`}</h3>
                </div>
                : <div className={itemCss.infoOnSale}>
                                    <h3>{name}</h3>
                                    <h4>{`$${price}`}</h4>
                                    <h3>{`$${precioFinal}`}</h3>
                
                                </div>



                }
               
                {onSale && <span className={itemCss.off}>
                                    {`${discount}% OFF `}
                                </span>}

               {stock <= 5 && stock > 1
                ? <span className={itemCss.stock}>{`⚠️Quedan ${stock}⚠️`}</span>
                : stock == 1
                ? <span className={itemCss.stock}>{`⚠️¡Ultimo!⚠️`}</span>
                : null
               }

                

            
            


        </div>

    )

}

export default Item;