import Product from "../models/productModel.js"

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.getAllProducts()
    res.json(products)
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message })
  }
}

const addProduct = async (req, res) => {
  const { name, description, price, stock } = req.body
  try {
    const newProduct = await Product.addProduct({ name, description, price, stock })
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message })
  }
}

export { getAllProducts, addProduct }