"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
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
});
const Product = mongoose_1.default.model("product", productSchema);
const getAllProducts = async () => {
    try {
        const products = await Product.find();
        return products;
    }
    catch (error) {
        throw new Error("Error al obtener productos");
    }
};
const addProduct = async (dataProduct) => {
    try {
        const newProduct = new Product(dataProduct);
        await newProduct.save();
        return newProduct;
    }
    catch (error) {
        throw new Error("Error al crear producto");
    }
};
exports.default = { getAllProducts, addProduct };
