import AdminItem from "../AdminItem/AdminItem"
import style from "./AdminItemList.module.css"

const AdminItemList = ({products, handleDelete})=>{

    return(
        <section className={style.admin_item_container}>

            {
                products.map((elemento)=>(

                    <AdminItem 
                    key={elemento.id}
                     name={elemento.name}
                     image={elemento.image}
                     stock={elemento.stock}
                     price={elemento.price}
                     onSale={elemento.onSale} 
                     id={elemento.id}  
                     category={elemento.category}
                     handleDelete={handleDelete}
                    />

                ))
            }
        </section>
    )
}

export default AdminItemList