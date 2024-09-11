import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { errorLogger } from "./utils/errorLogger.js";
import dotenv from "dotenv";

// Argumentos pasados por terminal (se inyectan en el ejecución del proceso)
// const args = process.argv;
// console.log(args);

// Entrar en escucha de las variables de entorno definidas en el archivo .env
dotenv.config();

// env -> enviroment
const PATH_FILE_MOVIES = process.env.PATH_FILE_MOVIES;
const PATH_FILE_ERROR = process.env.PATH_FILE_ERROR;

const getMovies = (ulrFile) => {
  try {
    // Validar acceso a la data
    if (!ulrFile) {
      throw new Error("Access denied");
    }

    const exists = existsSync(ulrFile);

    if (!exists) {
      writeFileSync(ulrFile, JSON.stringify([]));
      return [];
    }

    const movies = JSON.parse(readFileSync(ulrFile));

    return movies;
  } catch (error) {
    const objError = errorLogger(error, PATH_FILE_ERROR);
    return objError;
  }
};

const getMovieById = (id) => {
  try {
    if (!id) {
      throw new Error("ID is missing");
    }

    const movies = getMovies(PATH_FILE_MOVIES);

    const movie = movies.find((movie) => movie.id === id);

    if (!movie) {
      throw new Error("Movie not found");
    }

    return movie;
  } catch (error) {
    const objError = errorLogger(error, PATH_FILE_ERROR);
    return objError;
  }
};

const addMovie = (movie) => {
  try {
    const { title, releaseYear, genre, director, duration } = movie;

    if (!title || !releaseYear || !genre || !director || !duration) {
      throw new Error("Missing data");
    }

    // VALIDAR DATOS, TIPOS DE DATOS, QUE NO SEAN UNDEFINED

    const newMovie = {
      id: randomUUID(),
      title,
      releaseYear,
      genre,
      director,
      duration,
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    };

    const movies = getMovies(PATH_FILE_MOVIES);

    movies.push(newMovie);

    writeFileSync(PATH_FILE_MOVIES, JSON.stringify(movies));

    return newMovie;
  } catch (error) {
    const objError = errorLogger(error, PATH_FILE_ERROR);
    return objError;
  }
};

// const movie = {
//   title: "E.T. the Extra-Terrestrial",
//   releaseYear: 1982,
//   genre: "Science Fiction",
//   director: "Steven Spielberg",
// };

// const respuesta = getMovieById("e9b3d4a6-369d-4540-936e-de77cf055408");
// console.log(respuesta);

const updateMovie = (dataMovie) => {
  try {
    const { id, title, releaseYear, genre, director, duration } = dataMovie;

    if (!id || !dataMovie) {
      throw new Error("ID is missing");
    }

    const movies = getMovies(PATH_FILE_MOVIES);
    const movie = getMovieById(id);

    if (title) movie.title = title;
    if (releaseYear) movie.releaseYear = releaseYear;
    if (genre) movie.genre = genre;
    if (director) movie.director = director;
    if (duration) movie.duration = duration;

    movie.updateAt = new Date().toISOString();

    writeFileSync(PATH_FILE_MOVIES, JSON.stringify(movies));
    return movie;
  } catch (error) {
    const objError = errorLogger(error, PATH_FILE_ERROR);
    return objError;
  }
};

// const movieToUpdate = {
//   // id: "e9b3d4a6-369d-4540-936e-de77cf055408",
//   pepe: "holis",
//   title: "PRUEBA 2",
//   releaseYear: 1982,
//   genre: "Science Fiction",
//   director: "Steven Spielberg",
//   duration: 115,
// };

// const respuesta = updateMovie(movieToUpdate);
// console.log(respuesta);

const deleteMovie = (id) => {
  try {
    if (!id) {
      throw new Error("ID is missing");
    }

    const movies = getMovies(PATH_FILE_MOVIES);
    const movie = getMovieById(id);

    const newMovies = movies.filter((movie) => movie.id !== id);

    writeFileSync(PATH_FILE_MOVIES, JSON.stringify(newMovies));

    return movie;
  } catch (error) {
    const objError = errorLogger(error, PATH_FILE_ERROR);
    return objError;
  }
};

// const respuesta = deleteMovie("e9b3d4a6-369d-4540-936e-de77cf055408");
// console.log(respuesta);

export { getMovies, getMovieById, addMovie, updateMovie, deleteMovie };
