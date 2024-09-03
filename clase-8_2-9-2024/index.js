import {
  getProducts,
  addProduct,
  updateProduct,
  promoteProduct,
  deleteProduct,
} from "./models.js";

import {
  createNewProduct,
  createProductToUpdate,
} from "./utils/createObjectProduct.js";

const args = process.argv.splice(2);
const action = args[0];

switch (action) {
  case "list":
    console.log(getProducts());
    break;
  case "add":
    const newProduct = createNewProduct(args);
    console.log(addProduct(newProduct));
    break;
  case "update":
    console.log(updateProduct(args[1], createProductToUpdate(args)));
    break;
  case "promote":
    console.log(promoteProduct(args[1], args[2]));
    break;
  case "delete":
    console.log(deleteProduct(args[1]));
    break;
  default:
    console.log("Command incorrect...");
    break;
}
