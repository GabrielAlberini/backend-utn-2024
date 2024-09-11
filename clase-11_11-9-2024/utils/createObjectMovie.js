// Crea un nuevo objeto de película a partir de los argumentos
const createMovieObject = (args) => {
  const [title, releaseYear, genre, director, duration] = args.slice(1); // Ignoramos el primer argumento que es la acción

  if (!title || !releaseYear || !genre || !director || !duration) {
    throw new Error("Faltan datos para crear la película");
  }

  return {
    title,
    releaseYear: Number(releaseYear),
    genre,
    director,
    duration: Number(duration),
  };
};

// Crea un objeto con los datos a actualizar de una película
const createUpdateMovieObject = (args) => {
  const id = args[1]; // Asume que el ID es el segundo argumento
  const [title, releaseYear, genre, director, duration] = args.slice(2); // Los nuevos datos empiezan desde el tercer argumento

  if (!id) {
    throw new Error("Falta el ID de la película para actualizar");
  }

  // Creamos el objeto solo con los campos que no estén vacíos o no definidos
  const updatedMovie = {};
  if (title) updatedMovie.title = title;
  if (releaseYear) updatedMovie.releaseYear = Number(releaseYear);
  if (genre) updatedMovie.genre = genre;
  if (director) updatedMovie.director = director;
  if (duration) updatedMovie.duration = Number(duration);

  updatedMovie.id = id; // Aseguramos que el objeto siempre contenga el ID

  return updatedMovie;
};

export { createMovieObject, createUpdateMovieObject };
