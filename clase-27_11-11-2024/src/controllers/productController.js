import Product from "../models/ProductModel.js"

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.getAllProducts()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos", message: error.message })
  }
}

const addProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body
    const newProduct = await Product.addProduct({ name, description, price, stock })

    res.status(201).json(newProduct)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getProductById = async (req, res) => {
  try {
    const product = await Product.getProductById(req.params.id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export { getAllProducts, addProduct, getProductById }