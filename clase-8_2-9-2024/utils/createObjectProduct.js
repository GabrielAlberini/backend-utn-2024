const createNewProduct = (args) => {
  return {
    name: args[1],
    categories: args[2],
    price: args[3],
    quantity: args[4],
    expirationDate: args[5],
    promoteProduct: args[6],
  };
};

const createProductToUpdate = () => {
  return {
    name: args[2],
    categories: args[3],
    price: args[4],
    quantity: args[5],
    expirationDate: args[6],
    promoteProduct: args[7],
  };
};

export { createNewProduct, createProductToUpdate };
