// fs -> file system
// const fs = require("node:fs");
import fs from "node:fs";

const URL_FILE = "./data/alumnos.txt";

// CRUD -> Create, read, update, delete

// READ
const leerAlumnos = (url) => {
  const data = fs.readFileSync(url, "utf8");
  return data;
};

// UPDATE
const agregarAlumno = (url, data) => {
  fs.appendFileSync(url, `\n${data}`);
  return data + " agregado con éxito.";
};

// CREATE
const crearNuevaLista = (url, data) => {
  fs.writeFileSync(url, data);
  return "Archivo creado con éxito.";
};

// DELETE
const borrarArchivo = (url) => {
  fs.unlinkSync(url);
  return "Archivo borrado con éxito";
};

export { leerAlumnos, agregarAlumno, crearNuevaLista, borrarArchivo };
