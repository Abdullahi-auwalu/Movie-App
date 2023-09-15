import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import MovieList from '../components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d5309e445289b2c49d18d1c3c6bbc260`)
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
    <div className="min-h-full w-full bg-gray-50">
      <Header />
      <Featured />
      <div className="container mx-auto my-10 bg-gray-50">        
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
