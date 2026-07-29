import ItemList from "../ItemList/ItemList.jsx";
import SkeletonContainer from "../SkeletonContainer/SkeletonContainer.jsx";
import { useProducts } from "../../context/ProductsContext.jsx";
import { formatearPrecio, calcularOferta } from "../../utils/functions.js";
import { useLocation, useParams, useRoutes, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination.jsx";


function ItemListContainer({ mensaje, onSales }) {
  const { products, loading, productsOnSale } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

 
  
  const productsToShow = onSales 
  ?  productsOnSale
  :  products

  
  const currentPosts = productsToShow.slice(firstPostIndex, lastPostIndex);


  
   return (
    <>
      {loading ? (
        <SkeletonContainer />
      ) : (
        <div>
            <ItemList
            products={currentPosts}
            onSales={onSales}
            mensaje={mensaje}
            precioFinal={calcularOferta}
            formatearPrecio={formatearPrecio}
          />
              
         
     <Pagination
          totalPosts={productsToShow.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage} />
          
          
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
