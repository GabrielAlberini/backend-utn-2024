import ProductModel from "../models/ProductModel.js"

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.getAllProducts()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ error: "internal server error" })
  }
}

export { getAllProducts }