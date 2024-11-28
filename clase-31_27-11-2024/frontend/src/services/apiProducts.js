import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localstorage:5555/api/products",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`, // Opcional, dependiendo de la autenticación
  },
});

// Obtener todos los productos
const getProducts = async () => {
  try {
    const response = await apiClient.get("http://localhost:5555/api/products");
    return response.data; // Devuelve la lista de productos
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Agregar un nuevo producto
const addProduct = async (newProduct) => {
  try {
    const response = await apiClient.post("http://localhost:5555/api/products", newProduct);
    return response.data; // Devuelve el producto recién creado
  } catch (error) {
    console.error("Error adding product:", error);
    alert("El producto ya existe, debes elegir otro nombre de producto.")
    throw error;
  }
};

// Actualizar un producto existente
const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await apiClient.patch(`http://localhost:5555/api/products/${id}`, updatedProduct);
    return response.data; // Devuelve el producto actualizado
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Eliminar un producto
const deleteProduct = async (id) => {
  try {
    const response = await apiClient.delete(`http://localhost:5555/api/products/${id}`);
    return response.data; // Devuelve el producto eliminado
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export { getProducts, addProduct, updateProduct, deleteProduct };
