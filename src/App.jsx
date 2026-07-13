import { useEffect, useState } from "react"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import "./App.css"
import Layout from "./components/Layout/Layout.jsx"
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import Cart from "./components/Cart/Cart.jsx";
import LayoutAdmin from "./components/LayoutAdmin/LayoutAdmin.jsx";
import AdminItemContainer from "./components/AdminItemContainer/AdminItemContainer.jsx";
import FormularioProducto from "./components/FormularioProducto/FormularioProducto.jsx";
import FormularioContainer from "./components/FormularioProducto/FormularioContainer.jsx";

function App() {


  return (
    <>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer
          mensaje={"Aprovechá estas ofertas"}
          onSales={true}
          />}/>
           <Route path="/productos" element={<ItemListContainer
          mensaje={"Catálogo completo"}
          onSales={false}
          />}/>
          
          <Route path="/productos/:id" element={<ProductDetails />}/>

          <Route path="/carrito" element={<Cart />}/>
          

        </Route>


          <Route element={<LayoutAdmin/>}>
            <Route path="/admin"  element={<h2>Bienvenido</h2>}/>
            <Route path="/admin/nuevoproducto" element={<FormularioContainer edit={false}/>}/>
            <Route path="/admin/productos" element={<AdminItemContainer/>}/>
            <Route path="/admin/productos/:id" element={<FormularioContainer edit={true}/>}/>
            
          </Route>

      </Routes>
  


    </>
  )
}

export default App
