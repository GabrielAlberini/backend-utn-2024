import { Request, Response } from "express"
import Product from "../models/productModel"
import { ProductBody } from "../interfaces/ProductInterface"

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.getAllProducts()
    res.json(products)
  } catch (error: any) {
    res.status(500).json({ status: 500, error: error.message })
  }
}

const addProduct = async (req: Request, res: Response) => {
  const { name, description, price, stock } = req.body

  const productBody: ProductBody = { name, description, price, stock }

  try {
    const newProduct = await Product.addProduct(productBody)
    res.status(201).json(newProduct)
  } catch (error: any) {
    res.status(500).json({ status: 500, error: error.message })
  }
}

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, description, price, stock } = req.body

    const updatedProduct = await Product.updateProduct(id, { name, description, price, stock })

    res.json(updatedProduct)
  } catch (error: any) {
    res.status(500).json({ status: 500, error: error.message });
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const deletedProduct = await Product.deleteProduct(id)

    res.json(deletedProduct)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export { getAllProducts, addProduct, updateProduct, deleteProduct }