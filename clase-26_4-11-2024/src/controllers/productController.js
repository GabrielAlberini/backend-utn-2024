import ProductModel from "../models/ProductModel.js"

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.getAllProducts()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ error: "internal server error" })
  }
}

const addProduct = async (req, res) => {
  try {
    const { name, price, description, stock, brand } = req.body
    const newProduct = await ProductModel.addProduct({ name, price, description, stock, brand })
    res.status(201).json(newProduct)
  } catch (error) {
    const { message } = error

    if (message.startsWith("E11000")) {
      return res.status(400).json({ error: "no se puede repetir un producto" })
    }

    res.status(500).json({ error: "internal error server" })
  }
}

export { getAllProducts, addProduct }
