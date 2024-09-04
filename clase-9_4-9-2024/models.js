import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { errorLogger } from "./utils/errorLogger.js";

// Argumentos pasados por terminal (se inyectan en el ejecución del proceso)
// const args = process.argv;
// console.log(args);

// env -> enviroment
const PATH_FILE_MOVIES = process.env.PATH_FILE_MOVIES;

const getMovies = (ulrFile) => {
  try {
    // Validar acceso a la data
    if (!ulrFile) {
      throw new Error("Access denied");
    }

    const exists = existsSync(PATH_FILE_MOVIES);

    if (!exists) {
      writeFileSync(PATH_FILE_MOVIES, JSON.stringify([]));
      return [];
    }

    const movies = JSON.parse(readFileSync(PATH_FILE_MOVIES));
    return movies;
  } catch (error) {
    const errorPathFile = "./error/log.json";
    errorLogger(error, errorPathFile);
    return error.message;
  }
};

const getMovieById = () => {};
const addMovie = () => {};
const updateMovie = () => {};
const deleteMovie = () => {};

export { getMovies, getMovieById, addMovie, updateMovie, deleteMovie };
