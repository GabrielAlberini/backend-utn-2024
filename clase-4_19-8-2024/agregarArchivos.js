import { crearNuevaLista as crearNuevoArchivo } from "./index.js";
import { randomUUID } from "node:crypto";

// const random1 = Date.now().toString();
// const random2 = Math.floor(Math.random() * 1000000000).toString();

const random3 = randomUUID();

const urlFile = "data/archivos";

const respuesta = crearNuevoArchivo(`${urlFile}/${random3}.jpg`, "");

console.log(respuesta);
