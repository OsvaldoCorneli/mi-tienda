import { useEffect, useState } from "react"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import "./App.css"
import Layout from "./layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import LayoutAdmin from "./layoutadmin/LayoutAdmin.jsx";

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
            <Route path="/admin" element={<h1>AQUI VA EL LAYOUT</h1>} />
            <Route path="/admin/nuevoproducto" element={<h2>Formulario crear producto</h2>}/>
            <Route path="/admin/productos" element={<h2>todos los productos</h2>}/>
            <Route path="/admin/productos/:id" element={<h2>Formulario actualizar producto</h2>}/>
            
          </Route>

      </Routes>
  


    </>
  )
}

export default App
