export function fetchMovies() {
  return fetch("./data/movies.json")
    .then((response) => response.json())
    .then((movies) => movies)
    .catch((error) => console.error(`Error: ${error}`));
}

export function fetchBooks() {
  return fetch("./data/books.json")
    .then((response) => response.json())
    .then((books) => books)
    .catch((error) => console.error(error));
}
