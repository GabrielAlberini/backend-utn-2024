// Importar módulo http de node
import http from "node:http";
import { students } from "./students.js";
import { subject } from "./subject.js";

// Definiendo un puerto disponible de mi pc
// En nuestra pc hay 65535 puertos disponibles
const PORT = 3000;

const handleRequestHTTP = (request, response) => {
  const url = request.url;

  if (url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-type", "application/json");
    response.end(
      JSON.stringify({
        status: 200,
        author: "Gabriel Alberini",
      })
    );
  } else if (url === "/students") {
    // Setear el código de estado
    response.statusCode = 200;
    // Modificar en encabezado para manejar el tipo de respuesta
    response.setHeader("Content-Type", "application/json");
    // Enviando la data
    response.end(JSON.stringify(students));
  } else if (url === "/subjects") {
    // Setear el código de estado
    response.statusCode = 200;
    // Modificar en encabezado para manejar el tipo de respuesta
    response.setHeader("Content-Type", "application/json");
    // Enviando la data
    response.end(JSON.stringify(subject));
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/plain");
    response.end("No se encuentra el recurso capo :(");
  }
};

// Creación de un servidor http
// Al crear un servidor este espera un callback con el objeto de la petición y de la respuesta
const server = http.createServer(handleRequestHTTP);

const funcionQueSeEjecutaDespuesDeQueSeLevantaElServer = () => {
  console.log("Server en escucha");
};

server.listen(PORT, funcionQueSeEjecutaDespuesDeQueSeLevantaElServer);

// En la base compartir un objeto con el status de la app
// En la ruta "/students" compartir el json con el array de alumnos
// En la ruta "/asignaturas" compartir un json con todos los nombres de asignaturas
