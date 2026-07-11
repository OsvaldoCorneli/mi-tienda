//ESTE ES UN COMPONENTE QUE SE CREO DE DEMOSTRACION EN EL CURSO PERO NO LO UTILIZO EN EL PROYECTO

import React, { useState, useEffect } from 'react';
// Importaciones clave de Firebase
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config.js';


function ProductosDB() {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const prodDB = collection(db, "productos")
        getDocs(prodDB).then((resp) => {
            setProductos(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            );
        })
    }, []);




    return (
        <div>
            <h1>Productos Nacionales</h1>

            <div className="lista-productos">
                {/* 5. Mapeamos el estado `productos` para renderizar cada uno */}
                {productos.map(prod => (
                    <div key={prod.id} >
                        <img src={prod.image} alt={prod.name} style={{
                            width: '100px'
                        }} />
                        <h3>{prod.name}</h3>
                        <p>Categoría: {prod.category}</p>
                        <p>Precio: ${prod.price}</p>
                        <p>Stock: {prod.stock} unidades</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ProductosDB;