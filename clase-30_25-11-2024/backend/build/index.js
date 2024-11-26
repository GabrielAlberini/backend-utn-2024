"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_1 = require("./src/config/mongo");
const express_1 = __importDefault(require("express"));
const productRouter_1 = require("./src/routes/productRouter");
const cors_1 = __importDefault(require("cors"));
process.loadEnvFile();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, mongo_1.connectDB)();
app.use("/api/products", productRouter_1.productRouter);
app.listen(PORT, () => {
    console.log("Servidor en escucha por el puerto http://localhost:" + PORT);
});
