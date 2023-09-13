import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function MovieDisplay() {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'bcba4eb6a367daa1a1b89219aad4a01f'; // Replace with your TMDb API key
    const movieId = 'YOUR_MOVIE_ID'; // Replace with the ID of the movie you want to fetch

    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then((response) => {
        setMovieData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="movie-display">
      {movieData && <MovieCard movie={movieData} />}
    </div>
  );
}

export default MovieDisplay;