import { useEffect, useState } from "react"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css"
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";

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

      </Routes>
  


    </>
  )
}

export default App
