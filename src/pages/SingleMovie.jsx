import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Details from '../components/Details';
import Footer from '../components/Footer';
import { Spinner, Stack } from "@chakra-ui/react";

const SingleMovie = () => {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;


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
    return ( 
      <div className='flex align-middle justify-center text-lg mt-10 font-bold'>            
          <Stack direction='row' spacing={4}>
            <Spinner size="xl" color="blue.500" />
          </Stack>
      </div>
  );
  }

  if (error || !movie) {
    return <div className='flex align-middle justify-center text-red-500 text-lg mt-10 font-bold'>Movie not found.</div>;
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
