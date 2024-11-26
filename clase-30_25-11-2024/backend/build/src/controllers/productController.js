"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.getAllProducts = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
const getAllProducts = async (req, res) => {
    try {
        const products = await productModel_1.default.getAllProducts();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};
exports.getAllProducts = getAllProducts;
const addProduct = async (req, res) => {
    const { name, description, price, stock } = req.body;
    const productBody = { name, description, price, stock };
    try {
        const newProduct = await productModel_1.default.addProduct(productBody);
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};
exports.addProduct = addProduct;
