import React, { useState, useMemo, useCallback } from "react";

const MovieList = () => {
  // State to store the list of movies
  const [movies, setMovies] = useState([
    { title: "Chatrapathi", releaseYear: 2005, genre: "Action" },
    { title: "Darling", releaseYear: 2022, genre: "Comedy" },
    { title: "Court", releaseYear: 2025, genre: "Drama" },
  ]);

  // State to store the selected genre filter
  const [filterGenre, setFilterGenre] = useState("");

  // State to store the selected sorting option (default: sort by title)
  const [sortOption, setSortOption] = useState("title");

  /**
   * useCallback is used here to prevent unnecessary re-creations of the function.
   * - When the component re-renders, without useCallback, a new function instance is created every time.
   * - With useCallback, the function reference remains the same unless its dependencies change.
   * - This is useful for optimizing performance, especially when passing the function as a prop to child components.
   */
  const handleFilterChange = useCallback((e) => {
    setFilterGenre(e.target.value);
  }, []);

  /**
   * useCallback is used here for the same reason as handleFilterChange.
   * - It ensures that the function reference does not change on every render unless `sortOption` changes.
   * - Helps optimize performance when used with child components that rely on memoization.
   */
  const handleSortOptionsChange = useCallback((e) => {
    setSortOption(e.target.value);
  }, []);

  /**
   * useMemo is used to memoize the filtered movies.
   * - It ensures that filtering only runs when `movies` or `filterGenre` changes.
   * - Without useMemo, filtering would run on every render, even if the data hasn't changed.
   * - This improves performance by avoiding unnecessary computations.
   */
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      if (!filterGenre) return true; // Show all movies if no genre is selected
      return movie.genre === filterGenre; // Show only movies matching the selected genre
    });
  }, [movies, filterGenre]);

  /**
   * useMemo is used here to memoize the sorted movies.
   * - Sorting is an expensive operation, so we only want to sort when necessary.
   * - The sorting function will only run when `filteredMovies` or `sortOption` changes.
   * - Prevents unnecessary re-sorting on every render.
   */
  const sortedMovies = useMemo(() => {
    return [...filteredMovies].sort((a, b) => {
      if (sortOption === "title") {
        return a.title.localeCompare(b.title); // Sort alphabetically by title
      } else {
        return a.releaseYear - b.releaseYear; // Sort numerically by release year
      }
    });
  }, [filteredMovies, sortOption]);

  return (
    <div className="movie-list-container">
      <label>Filter by Genre:</label>
      <select value={filterGenre} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>

      <label>Sort by:</label>
      <select value={sortOption} onChange={handleSortOptionsChange}>
        <option value="title">Title</option>
        <option value="releaseYear">Release Year</option>
      </select>

      <ul>
        {sortedMovies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre} - {movie.releaseYear}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
