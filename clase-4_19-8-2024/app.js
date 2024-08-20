import {
  leerAlumnos,
  agregarAlumno,
  crearNuevaLista,
  borrarArchivo,
} from "./index.js";

const URL_FILE = "./data/alumnos.txt";

console.log("Ingresa 1 si quieres la lista de alumnos.");
console.log("Ingresa 2 si quieres agregar un nuevo alumno.");
console.log("Ingresa 3 si quieres crear una nueva lista.");
console.log("Ingresa 4 si quiere borrar una lista.");

const args = process.argv.splice(2);
const opcion = Number(args[0]);

switch (opcion) {
  case 1:
    console.log(leerAlumnos(URL_FILE));
    break;
  case 2:
    console.log(agregarAlumno(URL_FILE, args[1]));
    break;
  case 3:
    console.log(crearNuevaLista(args[1], "Matemática: 1"));
    break;
  case 4:
    console.log(borrarArchivo(args[1]));
  default:
    console.log("Opción incorrecta");
}
