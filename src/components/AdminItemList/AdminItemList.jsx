import AdminItem from "../AdminItem/AdminItem"


const AdminItemList = ({products})=>{

    console.log(products)

    return(
        <>
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
                    />

                ))
            }
        </>
    )
}

export default AdminItemList