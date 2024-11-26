import mongoose from "mongoose"
import { ProductBody } from "../interfaces/ProductInterface"

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
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

const updateProduct = async (id: string, updatedData: Partial<ProductBody>) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true })

    if (!updatedProduct) {
      throw new Error("Producto no encontrado")
    }

    return updatedProduct
  } catch (error) {
    throw new Error("Error al actualizar el producto")
  }
}

const deleteProduct = async (id: string) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id)

    if (!deleteProduct) {
      throw new Error("No se encuentra el producto que quieres borrar");
    }

    return deletedProduct
  } catch (error) {
    throw new Error("Error al eliminar el producto");
  }
}

export default { getAllProducts, addProduct, updateProduct, deleteProduct }