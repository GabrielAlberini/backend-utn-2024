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

export { getAllProducts, addProduct }