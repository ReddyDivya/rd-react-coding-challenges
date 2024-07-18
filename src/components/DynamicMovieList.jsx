import { useState } from 'react';
import moviesList from '../constants/movies';

const DynamicMovieList = () => {
  // State to hold the list of movies
  const [movies, setMovies] = useState(moviesList);

  // State to hold the selected genre for filtering
  const [filterGenre, setFilterGenre] = useState('');

  // State to hold the selected option for sorting
  const [sortOption, setSortOption] = useState('title');

  // Handler to update the sorting option based on user selection
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Handler to update the filter genre based on user selection
  const handleFilterGenre = (e) => {
    setFilterGenre(e.target.value);
  };

  // Filter movies based on the selected genre
  const filteredMovies = movies.filter((movie) => {
    if (filterGenre) {
      // Return only movies that match the selected genre
      return movie.genre === filterGenre;
    }
    // Return all movies if no genre is selected
    return true;
  });

  // Sort the filtered movies based on the selected sorting option
  const sortedMovies = filteredMovies.sort((a, b) => {
    if (sortOption === 'title') {
      // Sort by title alphabetically
      return a.title.localeCompare(b.title);
    } else {
      // Sort by release year in ascending order
      return a.releaseYear - b.releaseYear;
    }
  });

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-blue-600 mb-4">
        Dynamic Movie List with Filtering and Sorting
      </h1>
      
      <div className="flex justify-between mb-4">
        {/* Dropdown for filtering by genre */}
        <select
          className="p-2 border border-gray-300 rounded"
          value={filterGenre}
          onChange={handleFilterGenre}
        >
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Fantasy">Fantasy</option>
        </select>

        {/* Dropdown for sorting */}
        <select
          className="p-2 border border-gray-300 rounded"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="title">Title</option>
          <option value="releaseYear">Release Year</option>
        </select>
      </div>

      {/* Display the sorted and filtered list of movies */}
      <ul className="space-y-2">
        {sortedMovies.map((movie) => (
          <li
            key={movie.title}
            className="p-4 bg-gray-100 rounded border border-gray-200"
          >
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <p className="text-gray-500">{movie.genre}</p>
            <p className="text-gray-500">{movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicMovieList;
