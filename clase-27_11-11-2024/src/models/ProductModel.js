import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysqlConnection.js"

const Product = sequelize.define("products", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { msg: "EL nombre del producto es obligatorio" },
      len: { args: [3, 30], msg: "El nombre debe tener entre 3 y 30 caracteres" }
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: { args: [10, 500], msg: "La descripción debe tener entre 10 y 500 caracteres" }
    }
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: {
        args: [0],
        msg: "El precio debe der mayor a 0"
      }
    }
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: [1],
        msg: "El stock debe der mayor a 1"
      }
    }
  },
}, { timestamps: false })

const getAllProducts = () => {
  return Product.findAll()
}

const addProduct = async (product) => {
  const newProduct = await Product.create(product, { returning: true })
  return newProduct
}

const getProductById = async (id) => {
  const product = await Product.findByPk(id)
  return product
}

export default { Product, getAllProducts, addProduct, getProductById }
