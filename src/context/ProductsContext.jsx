import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, query, limit } from "firebase/firestore";

const ProductsContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts debe ser usado dentro de un ProductsProvider");
  }

  return context;
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const prodDB = query(collection(db, "productos"), limit(50));

      const response = await getDocs(prodDB);

      const listaProductos = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setProducts(listaProductos);
    } catch (error) {
      console.error("Error obteniendo productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProductById = (productId) => {
    const product = products.find((item) => item.id === productId);

    return product;
  };

  const getProductsSimilar = (category, productType, id)=>{

    const productsSimilar = products.filter((item)=> (item.category === category || item.productType === productType) && item.id != id)
    return productsSimilar;



  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        getProductById,
        getProductsSimilar
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
