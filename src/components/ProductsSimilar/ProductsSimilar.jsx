import { Link } from "react-router-dom";
import style from "./ProductsSimilar.module.css"
const ProductsSimilar = ({ id, name, price, image})=>{

    console.log( 'id',id, 'name',name, 'p',price, 'i',image )
    return(

        <Link to={'/productos/'+id} className={style.card_similar}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>

        </Link>
        
    )

}

export default ProductsSimilar;