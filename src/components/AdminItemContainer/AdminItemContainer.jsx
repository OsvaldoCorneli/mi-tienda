import AdminItemList from "../AdminItemList/AdminItemList";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
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

    const handleDelete = async (id) => {
        const confirmacion = window.confirm("¿Está seguro de que desea eliminar este producto ? ");
if (confirmacion) {
            const docRef = doc(db, "productos", id);
            await deleteDoc(docRef);
            // Actualizamos el estado local para reflejar el cambio en la UI inmediatamente.
                setProducts(products.filter(elem => elem.id !== id));
            alert("Producto eliminado.");
        }
    };



    return (
        <>
            {loading
                ? <h2>Cargando...</h2>
                : <AdminItemList products={products} handleDelete={handleDelete}/>
            }

        </>
    )
}

export default AdminItemContainer;