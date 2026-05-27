import { useEffect, useState } from "react"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css"
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";

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







        </Route>

      </Routes>
    
      {/* <Layout>
        <ItemListContainer/>
      </Layout> */}


    </>
  )
}

export default App
