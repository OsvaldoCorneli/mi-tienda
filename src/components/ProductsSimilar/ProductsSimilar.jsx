import { Link } from "react-router-dom";
import style from "./ProductsSimilar.module.css"
const ProductsSimilar = ({ id, name, price, image, onSale,formatearPrecio,calcularOferta , discount})=>{

    return(

        <Link to={'/productos/'+id} className={style.card_similar}>
            {
                onSale
                ? <span>{discount} OFF</span>
                : null
            }
            <img src={image} alt={name} />
            <h3>{name}</h3>
            {
            onSale
            ? <p>${formatearPrecio(calcularOferta(price,discount))}</p>
            : <p>${formatearPrecio(price)}</p>
            }

        </Link>
        
    )

}

export default ProductsSimilar;