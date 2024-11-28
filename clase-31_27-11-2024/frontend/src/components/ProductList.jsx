import { useState, useEffect } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../services/apiProducts";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    stock: 0,
    price: 0,
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateProduct(formData._id, formData);
      } else {
        console.log(formData)
        await addProduct(formData)
      }
      fetchProducts();
      resetForm();
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      try {
        await deleteProduct(id);
        fetchProducts();
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
      }
    }
  };

  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(true);
  };

  const resetForm = () => {
    setFormData({
      id: "",
      name: "",
      description: "",
      stock: 0,
      price: 0,
    });
    setIsEditing(false);
  };

  return (
    <div className="container p-5">
      <h1 className="title">Lista de Productos</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Nombre del producto"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Descripción</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Descripción del producto"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Stock</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="Cantidad en stock"
              value={formData.stock}
              onChange={(e) =>
                setFormData({ ...formData, stock: parseInt(e.target.value, 10) })
              }
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Precio</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="Precio"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: parseFloat(e.target.value) })
              }
              required
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary mb-3" type="submit">
              {isEditing ? "Actualizar Producto" : "Agregar Producto"}
            </button>
            {isEditing && (
              <button
                className="button is-light ml-3"
                type="button"
                onClick={resetForm}
              >
                Cancelar
              </button>
            )}
          </div>
        </div>
      </form>

      <div className="columns is-multiline">
        {products.map((product) => (
          <div key={product._id} className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <p className="title">{product.name}</p>
                <p className="subtitle">{product.description}</p>
                <div className="content">
                  <strong>Precio:</strong> ${product.price}
                  <br />
                  <strong>Stock:</strong> {product.stock} disponibles
                </div>
              </div>
              <footer className="card-footer">
                <button
                  className="card-footer-item"
                  onClick={() => handleEdit(product)}
                >
                  Editar
                </button>
                <button
                  className="card-footer-item"
                  onClick={() => handleDelete(product._id)}
                >
                  Eliminar
                </button>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProductList };
