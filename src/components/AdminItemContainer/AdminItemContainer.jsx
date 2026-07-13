import AdminItemList from "../AdminItemList/AdminItemList";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config.js';

const AdminItemContainer = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
     const [loading, setLoading] = useState(true);

    useEffect(() => {
        const prodDB = collection(db, "productos")
        getDocs(prodDB).then((resp) => {
            setProducts(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            );
            setLoading(false)
        })
    }, []);




    return (
        <>  
        {loading
                ? <h2>Cargando...</h2>
                : <AdminItemList products={products}/>
        }
            
        </>
    )
}

export default AdminItemContainer;