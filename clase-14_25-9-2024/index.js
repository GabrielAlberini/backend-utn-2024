import http from "node:http";
import crypto from "node:crypto";

<<<<<<< HEAD
=======
const applyCors = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permitir acceso desde cualquier dominio
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  ); // Métodos permitidos
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Headers permitidos
};

>>>>>>> ab77785d3b55f0a1aba2b8e06bab8e4d918bcae4
let users = [
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "John Doe",
    age: 25,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    name: "Jane Smith",
    age: 30,
  },
  {
    id: "e4d909c2-2d44-4f6d-89a3-df16e44b5e67",
    name: "Alice Johnson",
    age: 22,
  },
  {
    id: "a98fbd3c-ff2e-11e8-8eb2-f2801f1b9fd1",
    name: "Robert Brown",
    age: 28,
  },
  {
    id: "55efb2c9-8e9b-4779-a6ed-16be5637e9a4",
    name: "Michael Davis",
    age: 35,
  },
];

// Declaración -> enseñarle a la pc que tiene que hacer
const responseToClient = (res, obj, code = 200) => {
  res.statusCode = code;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(obj));
};

// La función se invocará cuando reciba una petición
const servidorHttp = http.createServer((request, response) => {
  const { url, method } = request;
<<<<<<< HEAD
=======
  applyCors(response);
>>>>>>> ab77785d3b55f0a1aba2b8e06bab8e4d918bcae4

  if (url === "/api/users" && method === "GET") {
    // Invocación -> usar la función y pasarle los datos REALES
    responseToClient(response, users);
  } else if (url.startsWith("/api/users/") && method === "GET") {
    const id = url.split("/")[3];
    const user = users.find((u) => u.id === id);

    if (!user) {
      responseToClient(response, { error: 404 }, 404);
    } else {
      responseToClient(response, user);
    }
  } else if (url === "/api/users" && method === "POST") {
    let data = "";

    request.on("data", (chunk) => {
      data += chunk;
    });

    request.on("end", () => {
      const user = JSON.parse(data);
      user.id = crypto.randomUUID();
      users.push(user);
      response.end(JSON.stringify(user));
    });
  } else if (url.startsWith("/api/users/") && method === "PUT") {
    let data = "";

    request.on("data", (chunk) => {
      data += chunk;
    });

    request.on("end", () => {
      const dataToUpdate = JSON.parse(data);

      const id = url.split("/")[3];
      const user = users.find((u) => u.id === id);

      if (!user) {
        responseToClient(response, { error: 404 }, 404);
      }

      const { name, age } = dataToUpdate;

      if (name !== undefined) user.name = name;
      if (age !== undefined) user.age = age;

      responseToClient(response, user);
    });
  } else if (url.startsWith("/api/users/") && method === "DELETE") {
    const id = url.split("/")[3];
    const user = users.find((u) => u.id === id);

    if (!user) {
      responseToClient(response, { error: 404 }, 404);
    }

    const newUsers = users.filter((u) => u.id !== id);
    users = newUsers;
    responseToClient(response, user);
  } else {
    response.statusCode = 404;
    responseToClient(response, { error: 404 }, 404);
  }
});

// La función se invocará cuando el servidor entre en escucha o se levante
servidorHttp.listen(65000, () => {
  console.log(`Server running on port http://localhost:65000`);
});

// http://localhost:65000/api/users
// por defecto los navegadores en el buscador ejecutan peticiones GET
// agregar un nuevo usuario -> POST

// http://localhost:65000/api/products
