import { useState } from "react";
import FormularioProductos from "./FormularioProducto";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const FormularioContainer = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    brand: "",
    productType: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    category: "",
    onSale: false,
    discount: "",
    sold: 0,
    rating: 0,
    reviews: 0,
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const db = getFirestore();
    const productosCollection = collection(db, "productos");

    await addDoc(productosCollection, {
      ...product,
      price: Number(product.price),
      stock: Number(product.stock),
      discount: Number(product.discount),
      sold: Number(product.sold),
      rating: Number(product.rating),
      reviews: Number(product.reviews),
    });

    alert("Producto agregado correctamente.");

    setProduct({
      id: "",
      name: "",
      brand: "",
      productType: "",
      description: "",
      price: "",
      stock: "",
      image: "",
      category: "",
      onSale: false,
      discount: "",
      sold: 0,
      rating: 0,
      reviews: 0,
      featured: false,
    });
  } catch (error) {
    console.error("Error al guardar el producto:", error);
    alert("Hubo un error al guardar el producto.");
  }
};

return (
  <FormularioProductos
    product={product}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
  />
);
};

export default FormularioContainer;