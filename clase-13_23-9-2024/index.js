import http from "node:http";

let products = [
  {
    id: 1,
    name: "Silla",
    price: 200,
  },
  {
    id: 2,
    name: "Mesa",
    price: 300,
  },
];

const handleRequestHttp = (request, response) => {
  // http://localhost:1234/api/products/2
  const url = request.url;
  const method = request.method;

  if (url === "/api/products" && method === "GET") {
    response.end(JSON.stringify(products));
  } else if (url.startsWith("/api/products") && method === "GET") {
    const id = Number(url.split("/")[3]);
    const product = products.find((p) => p.id === id);
    if (!product) {
      response.statusCode = 404;
      response.end(JSON.stringify({ status: "Not found" }));
    }
    response.end(JSON.stringify(product));
  } else if (url.startsWith("/api/products") && method === "POST") {
    // http://localhost:1234/api/products
    // chunk -> pedacitos de data
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      const newProduct = JSON.parse(body);
      products.push(newProduct);
      response.end(JSON.stringify(newProduct));
    });
  } else if (url.startsWith("/api/products") && method === "PUT") {
    let body = "";
    const id = Number(url.split("/")[3]);
    console.log(id, "<-- id de producto enviando por url");

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      const product = products.find((p) => p.id === id);
      if (!product) {
        response.statusCode = 404;
        response.end(JSON.stringify({ status: "Not found" }));
      }
      const dataToUpdate = JSON.parse(body);
      const { name, price } = dataToUpdate;

      if (name !== undefined) product.name = name;
      if (price !== undefined) product.price = price;

      response.end(JSON.stringify(product));
    });
  } else if (url.startsWith("/api/products") && method === "DELETE") {
    const id = Number(url.split("/")[3]);
    const newProducts = products.filter((p) => p.id !== id);
    products = newProducts;
    response.end(JSON.stringify(products));
  } else {
    response.statusCode = 404;
    response.end(JSON.stringify({ status: "Not found" }));
  }
};

const server = http.createServer(handleRequestHttp);

server.listen(1234, () => {
  console.log("Server en escucha por el puerto http://localhost:1234");
});
