import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Details from '../components/Details';
import Footer from '../components/Footer';

const SingleMovie = () => {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    

    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d5309e445289b2c49d18d1c3c6bbc260`);
        if (!response.ok) {
          throw new Error('Movie not found');
        }
        const data = await response.json();
        setMovie(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className="bg-gray-50">
      <div className="flex w-full">
        <Sidebar />
        <Details movie={movie} />
      </div>
      <Footer />
    </div>
  );
};

export default SingleMovie;
