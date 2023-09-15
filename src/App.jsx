import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';
import { Spinner,Stack } from "@chakra-ui/react";


function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d5309e445289b2c49d18d1c3c6bbc260`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results.slice(0, 10));
        setIsLoading(false);
        console.log('Movie results:', data.results);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return( 
      <div className='flex h-10  align-middle justify-center text-lg mt-10 font-bold'>            
          <Stack direction='row' spacing={4}>
            <Spinner size="xl" color="blue.500" />
          </Stack>
      </div>
  )}
  if (error) {
    return <div className='flex align-middle justify-center text-red-500 text-lg mt-10 font-bold'>Movie not found.</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<SingleMovie />} /> 
  </Routes>
  );
}

export default App;

