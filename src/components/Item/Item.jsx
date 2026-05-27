import itemCss from './Item.module.css'


function Item({ id, name, price, image,stock }) {
    console.log(stock)
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
                <div className={itemCss.info}>
                    <h3 className={itemCss.name}>{name}</h3>
                    <h3 className={itemCss.price}>{`$${price}`}</h3>
                </div>
               
               {stock <= 5 
                ? <span >{`⚠️Quedan ${stock}⚠️`}</span>
                : null
               }

                

            
            


        </div>

    )

}

export default Item;