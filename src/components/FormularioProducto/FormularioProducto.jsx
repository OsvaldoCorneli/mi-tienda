import style from "./FormularioProducto.module.css"


const FormularioProductos = ({
  product,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Nuevo Producto</h2>

      <label>ID</label>
      <input
        type="text"
        name="id"
        value={product.id}
        onChange={handleChange}
      />

      <label>Nombre</label>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
      />

      <label>Marca</label>
      <input
        type="text"
        name="brand"
        value={product.brand}
        onChange={handleChange}
      />

      <label>Tipo de Producto</label>
      <input
        type="text"
        name="productType"
        value={product.productType}
        onChange={handleChange}
      />

      <label>Descripción</label>
      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
      />

      <label>Precio</label>
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
      />

      <label>Stock</label>
      <input
        type="number"
        name="stock"
        value={product.stock}
        onChange={handleChange}
      />

      <label>Imagen</label>
      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleChange}
      />

      <label>Categoría</label>
      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
      />

      <label>Descuento</label>
      <input
        type="number"
        name="discount"
        value={product.discount}
        onChange={handleChange}
      />

      <label>Vendidos</label>
      <input
        type="number"
        name="sold"
        value={product.sold}
        onChange={handleChange}
      />

      <label>Rating</label>
      <input
        type="number"
        step="0.1"
        min="0"
        max="5"
        name="rating"
        value={product.rating}
        onChange={handleChange}
      />

      <label>Reviews</label>
      <input
        type="number"
        name="reviews"
        value={product.reviews}
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          name="onSale"
          checked={product.onSale}
          onChange={handleChange}
        />
        En oferta
      </label>

      <label>
        <input
          type="checkbox"
          name="featured"
          checked={product.featured}
          onChange={handleChange}
        />
        Destacado
      </label>

      <button type="submit">Guardar Producto</button>
    </form>
  );
};

export default FormularioProductos;