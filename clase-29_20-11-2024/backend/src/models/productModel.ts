import mongoose from "mongoose"
import { ProductBody } from "../interfaces/ProductInterface"

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  versionKey: false
})

const Product = mongoose.model("product", productSchema)

const getAllProducts = async () => {
  try {
    const products = await Product.find()
    return products
  } catch (error) {
    throw new Error("Error al obtener productos")
  }
}

const addProduct = async (dataProduct: ProductBody) => {
  try {
    const newProduct = new Product(dataProduct)
    await newProduct.save()
    return newProduct
  } catch (error) {
    throw new Error("Error al crear producto")
  }
}

export default { getAllProducts, addProduct }