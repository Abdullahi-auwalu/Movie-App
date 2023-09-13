import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import MovieList from '../components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=01175956cb43fb1ff60535925348eb10')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results.slice(0, 12)); // Limit to first 12 movies
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-full w-full bg-white">
      <Header />
      <Featured />
      <div className="container mx-auto my-10">
        <h2 className="text-2xl font-semibold mb-4">Top 10 Movies</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <MovieList movies={movies} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
