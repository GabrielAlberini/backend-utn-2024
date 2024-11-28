"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
// /api/products
productRouter.get("/", productController_1.getAllProducts);
productRouter.post("/", productController_1.addProduct);
