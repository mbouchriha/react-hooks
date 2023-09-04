import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Movie 1",
      description: "Description for Movie 1",
      posterURL: "URL_TO_POSTER_1",
      rating: 4.5,
    },
    {
      title: "Movie 2",
      description: "Description for Movie 2",
      posterURL: "URL_TO_POSTER_2",
      rating: 3.8,
    },
    // Add more movies here
  ]);

  const [filters, setFilters] = useState({ title: "", rating: "" });

  const handleFilterChange = (newFilter) => {
    setFilters({ ...filters, ...newFilter });
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      (filters.rating === "" || movie.rating >= parseFloat(filters.rating))
    );
  });

  const handleAddMovie = () => {
    // You can implement a modal or form to add a new movie and update the movies state here.
    // For simplicity, we won't implement it in this example.
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
}

export default App;