import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL;

const getProducts = async () => {
  try {
    const response = await axios.get(API_URL + "/api/products")
    return response.data
  } catch (error) {
    throw error
  }
}

const addProduct = async (newProduct) => {
  try {
    const response = await axios.post(API_URL + "/api/products", newProduct)
    return response.data
  } catch (error) {
    throw error
  }
}

export { getProducts, addProduct }
