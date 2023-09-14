import { Link } from 'react-router-dom';
import Favorite from "../assets/Favorite.png";
import Apple from "../assets/apple.png";
import IMDB from "../assets/IMDB.png";



function MovieCard({ movie }) {
    return (
      <div data-testid:movie-card className="flex sm:justify-start justify-center bg-gray-50">
        <Link to={`/movies/${movie.id}`}> 
          <div className="w-80 px-4 py-3 mb-7 h-full sm:w-64 sm:mr-10">            
            <div className="h-96 relative">
          <img className="z-40 mt-5 absolute right-4" src={Favorite} alt="" />
          <img data-testid:movie-poster  className="z-0 mt-0 inset-0 w-screen h-full object-cover object-center" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </div>
        <p data-testid:movie-release-date  className="my-4 text-gray-400"> {movie.release_date}</p>
        <h3 data-testid:movie-title  className="text-2xl font-semibold">{movie.title}</h3>
        <div className="my-4 flex justify-between">
          <div className="flex">
            <img className="h-5 mr-3 mt-1" src={IMDB} alt="logo" />
            <p>{movie.vote_count}/100</p>
          </div>
          <div className="flex mr-5">
            <img className="h-5 mr-3 mt-1" src={Apple} alt="logo" />
            <p>70%</p>
          </div>
        </div>
        <p className="text-gray-500">Action Adventure</p>
      </div>
          
        </Link>
      </div>
    );
  }

  


export default MovieCard;


