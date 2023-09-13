import { useState, useEffect } from 'react';


export const MovieData = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=01175956cb43fb1ff60535925348eb10')
          
          .then(response => response.json())
          .then(data => {
            setMovies(data.results);
            setIsLoading(false);
            setMovies(data.results.slice(0, 12));
            console.log(data.results);
          })
          .catch(err => {
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
}