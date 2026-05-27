import itemOnSaleCss from './ItemOnSale.module.css'

function ItemOnSale({id,name,precioFinal, price, discount, image, stock}) {


    return (
        <div className={itemOnSaleCss.card}>
            
                <div className={itemOnSaleCss.image}>
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
                <div className={itemOnSaleCss.info}>
                    <h3>{name}</h3>
                    <h4>{`$${price}`}</h4>
                    <h3>{`$${precioFinal}`}</h3>

                </div>

                <span className={itemOnSaleCss.off}>
                    {`${discount}% OFF `}
                </span>
                {
                    stock<=5
                    ? <span className={itemOnSaleCss.stock}>
                    {`⚠️Quedan ${stock}⚠️`}
                    </span>
                    : null

                }
                
                

            
            


        </div>
    )
}

export default ItemOnSale;
