import ItemList from "../ItemList/ItemList.jsx";
import SkeletonContainer from "../SkeletonContainer/SkeletonContainer.jsx";
import { useProducts } from "../../context/ProductsContext.jsx";
import { formatearPrecio, calcularOferta } from "../../utils/functions.js";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Pagination from "../Pagination/Pagination.jsx";

function ItemListContainer({ mensaje, onSales }) {
  const { products, loading, getProductoOnSale } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [totalProducts, SetTotalProducts] = useState(0)
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);
  const currentPostsOnsale = getProductoOnSale().slice(firstPostIndex, lastPostIndex)


  return (
    <>
      {loading ? (
        <SkeletonContainer />
      ) : (
        <div>
            {
                !onSales 
                ?  <ItemList
            products={currentPosts}
            onSales={onSales}
            mensaje={mensaje}
            precioFinal={calcularOferta}
            formatearPrecio={formatearPrecio}
          />
                :  <ItemList
            products={currentPostsOnsale}
            onSales={onSales}
            mensaje={mensaje}
            precioFinal={calcularOferta}
            formatearPrecio={formatearPrecio}
          />

            }
         
          {
            onSales 
            ? <Pagination
          totalPosts={getProductoOnSale().length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage} />
          : <Pagination
          totalPosts={totalProducts}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage} />

          }
          
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
