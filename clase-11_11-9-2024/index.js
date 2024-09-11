import {
  getMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
} from "./models.js";

import dotenv from "dotenv";
import {
  createMovieObject,
  createUpdateMovieObject,
} from "./utils/createObjectMovie.js";
import { errorLogger } from "./utils/errorLogger.js";

// Cargar variables de entorno
dotenv.config();

const args = process.argv.splice(2);
const action = args[0];

switch (action) {
  case "list":
    console.log(getMovies(process.env.PATH_FILE_MOVIES));
    break;
  case "get":
    console.log(getMovieById(args[1]));
    break;

  case "add":
    const newMovie = createMovieObject(args);
    console.log(addMovie(newMovie));
    break;

  case "update":
    const updatedMovie = createUpdateMovieObject(args);
    console.log(updateMovie(updatedMovie));
    break;

  case "delete":
    console.log(deleteMovie(args[1]));
    break;

  default:
    const error = errorLogger(
      new Error("Comand Incorrect"),
      process.env.PATH_FILE_ERROR
    );
    console.log(error);
    break;
}
