// get -> getters -> funciones que leen data
// set -> setters -> funciones que modifican data

// Imporantando el objeto entero de fs
// import fs from "node:fs"; -> fs.existsSync()
// Destructuring -> "sacar" las funciones que necesito
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID } from "node:crypto";

// Variables de entorno
const PATH_FILE = process.env.PATH_FILE;

const getProducts = () => {
  // Verificar si el archivo existe
  // Verificar mediante las credenciales el acceso a la base de datos

  if (!PATH_FILE) {
    return "Don´t has permissions";
  }

  const existsFile = existsSync(PATH_FILE);

  if (!existsFile) {
    writeFileSync(PATH_FILE, JSON.stringify([]));
    return [];
  }

  return JSON.parse(readFileSync(PATH_FILE));
};

const addProduct = (product) => {
  const { name, categories, quantity, price, expirationDate, promoteProduct } =
    product;

  const products = getProducts();

  const existsProduct = products.find((product) => product.name === name);

  if (existsProduct) {
    return "Product already exists";
  }

  const newProduct = {
    id: randomUUID(),
    name,
    // "hogar, jardin, electricidad"
    // ["hogar", " jardin"," electricidad"]
    // ["hogar", "jardin","electricidad"]
    categories: categories.split(",").map((category) => category.trim()),
    price: Number(price),
    quantity: Number(quantity),
    expirationDate,
    promoteProduct: promoteProduct === "promote" ? true : false,
  };

  products.push(newProduct);

  writeFileSync(PATH_FILE, JSON.stringify(products));

  return newProduct;
};

const updateProduct = (id, dataProduct) => {
  const { name, categories, quantity, price, expirationDate, promoteProduct } =
    dataProduct;

  const products = getProducts();

  const existsProduct = products.find((product) => product.id === id);

  if (!existsProduct) {
    return "Not found product";
  }

  if (name) existsProduct.name = name;
  if (categories)
    existsProduct.categories = categories
      .split(",")
      .map((category) => category.trim());
  if (quantity) existsProduct.quantity = quantity;
  if (price) existsProduct.price = price;
  if (expirationDate) existsProduct.expirationDate = expirationDate;
  if (promoteProduct)
    existsProduct.promoteProduct = promoteProduct === "promote" ? true : false;

  writeFileSync(PATH_FILE, JSON.stringify(products));

  return existsProduct;
};

const promoteProduct = (id, promoteValue) => {
  const products = getProducts();

  const existsProduct = products.find((product) => product.id === id);

  if (!existsProduct) {
    return "Not found product";
  }

  if (promoteValue === "promote" && existsProduct.promoteProduct) {
    return "Product already promote";
  } else if (promoteValue === "promote" && !existsProduct.promoteProduct) {
    existsProduct.promoteProduct = true;
  }

  if (promoteValue === "noPromote" && !existsProduct.promoteProduct) {
    return "Product already no promote";
  } else if (promoteValue === "noPromote" && existsProduct.promoteProduct) {
    existsProduct.promoteProduct = false;
  }

  writeFileSync(PATH_FILE, JSON.stringify(products));

  return existsProduct;
};

const deleteProduct = (id) => {
  const products = getProducts();

  const existsProduct = products.find((product) => product.id === id);

  if (!existsProduct) {
    return "Not found product";
  }

  const newProducts = products.filter((product) => product.id !== id);

  writeFileSync(PATH_FILE, JSON.stringify(newProducts));

  return existsProduct;
};

export {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  promoteProduct,
};
