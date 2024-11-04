import { Schema, model } from "mongoose";

// name, price, description, stock

const productSchema = new Schema({
  name: { type: String },
  price: { type: Number },
  description: { type: String },
  stock: { type: Number }
})

const Product = model("products", productSchema)

const getAllProducts = () => {
  return Product.find()
}

export default { getAllProducts }