import { Schema, model } from "mongoose";

// name, price, description, stock

const productSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'El nombre del producto es obligatorio'],
    trim: true,
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    maxlength: [100, 'El nombre no puede exceder los 100 caracteres']
  },
  brand: {
    type: String,
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'El precio del producto es obligatorio'],
    min: [0, 'El precio no puede ser menor a 0']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'La descripción no puede exceder los 500 caracteres']
  },
  stock: {
    type: Number,
    required: [true, 'El stock es obligatorio'],
    min: [0, 'El stock no puede ser menor a 0'],
    validate: {
      validator: Number.isInteger,
      message: 'El stock debe ser un número entero'
    }
  }
}, {
  versionKey: false
});

const Product = model("products", productSchema)

const getAllProducts = () => {
  return Product.find()
}

const addProduct = (productData) => {
  const product = new Product(productData);
  return product.save();
}

export default { getAllProducts, addProduct };