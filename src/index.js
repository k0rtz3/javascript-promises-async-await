import { fetchMovies, fetchBooks } from "./services";

const movies = require("./data/movies.json");

const getBooksAndMovies = () => {
  return Promise.all([fetchBooks(), fetchMovies()])
    .then(([books, movies]) => ({
      books,
      movies,
    }))
    .catch((error) => console.log("Error fetching books and movies" + error));
};

const getBooksAndMoviesPromise = getBooksAndMovies();

getBooksAndMoviesPromise.then((results) => {
  console.log("getBooksAndMoviesPromise", results);
});

function getBooksOrMovies() {
  return Promise.race([fetchBooks(), fetchMovies()])
    .then((results) => results)
    .catch((error) => console.log("Error waiting for the promise", error));
}

const getBooksOrMoviesPromise = getBooksOrMovies();

getBooksOrMoviesPromise.then(results => {
    console.log("getBooksOrMoviesPromise", results)
})