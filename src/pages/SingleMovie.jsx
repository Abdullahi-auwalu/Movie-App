import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; // Import Sidebar
import Details from '../components/Details'; // Import Details
import Footer from '../components/Footer'; // Import Footer

const SingleMovie = () => {
  const { id: movieId } = useParams(); // Destructure 'id' as 'movieId'
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch movie details using the movieId
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=01175956cb43fb1ff60535925348eb10`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Movie not found');
        }
        console.log("Movie ID:", movieId);
        return response.json();
      })
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className="bg-gray-50 ">
      <div className="flex">
        <Sidebar /> 
        <Details movie={movie} />
      </div>
      <Footer /> 
    </div>
  );
};

export default SingleMovie;


// import Details from "../components/Details"
// import Sidebar from "../components/Sidebar"
// import Footer from "../components/Footer"
// import { useParams } from 'react-router-dom';


// const SingleMovie = ({movies}) => {
//   const { movieId } = useParams();
//   const movie = movies.find((m) => m.id === Number(movieId));

//   if (!movie) {
//     return <div>Movie not found.</div>;
//   }


//   return (
//     <div className=" bg-gray-50">

//         <img
//         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//         alt={movie.title}
//       />
//       <h2>{movie.title}</h2>
//       <p>Release Date: {movie.release_date}</p>
//       {/* <div className="flex">        
//         <Sidebar />
//         <Details />
//       </div>
//         <Footer /> */}
//     </div>
//   )
// }

// export default SingleMovie