import { Link } from "react-router-dom";
import style from "./AdminItem.module.css"


function AdminItem({ name, image, stock, price, onSale, id, category,handleDelete }) {


    return (

        <>
            <section className={style.card_admin}>
                <div className={style.card_admin_container1}>
                    <img src={image} alt="" />
                </div>
                <div className={style.card_admin_container2}>
                    <div className={style.card_admin_container2_1}>
                        <Link to={`/admin/productos/${id}`}>editar</Link>
                        <button onClick={()=> handleDelete(id)}>Eliminar</button>
                    </div>
                    <div className={style.card_admin_container2_2}>
                        <h4>{name}</h4>
                        <p>Stock: {stock}</p>
                        <p>precio: {price}</p>
                        <p>Oferta: {onSale?"Si":"No"}</p>
                        <h6>{category}</h6>
                        <h6>{id}</h6>
                    </div>
                </div>
            </section>

        </>

    )

}

export default AdminItem;