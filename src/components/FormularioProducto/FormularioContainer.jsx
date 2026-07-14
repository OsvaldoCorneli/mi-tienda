import { useEffect, useState } from "react";
import FormularioProductos from "./FormularioProducto";
import { useParams, useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const initialProduct = {
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
};

const FormularioContainer = ({ edit }) => {
  const { id } = useParams();
  const db = getFirestore();
  const navigate = useNavigate();
  const [product, setProduct] = useState(initialProduct);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (!edit) {
      setProduct(initialProduct);
      return;
    }

    const cargarProducto = async () => {
      try {
        setLoading(true);

        const docRef = doc(db, "productos", id);
        const resp = await getDoc(docRef);

        if (resp.exists()) {
          setProduct({
            ...resp.data(),
            id: resp.id,
          });
        } else {
          alert("Producto no encontrado");
          navigate("/admin/productos");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    cargarProducto();
  }, [edit, id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // CREAR PRODUCTO
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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

      setProduct(initialProduct);
    } catch (error) {
      console.error(error);
      alert("Hubo un error al guardar el producto.");
    }
  };

  // EDITAR PRODUCTO
  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, "productos", id);

      await updateDoc(docRef, {
        ...product,
        price: Number(product.price),
        stock: Number(product.stock),
        discount: Number(product.discount),
        sold: Number(product.sold),
        rating: Number(product.rating),
        reviews: Number(product.reviews),
      });

      alert("Producto actualizado correctamente.");

      navigate("/admin/productos");
    } catch (error) {
      console.error(error);
      alert("Hubo un error al editar el producto.");
    }
  };

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <FormularioProductos
      product={product}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleEdit={handleEdit}
      edit={edit}
      navigate={navigate}
    />
  );
};

export default FormularioContainer;