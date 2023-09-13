import MovieCard from './MovieCard';

function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <div></div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;






// import MovieCard from './MovieCard';
// import Details from './Details';

// // const apiKey = '01175956cb43fb1ff60535925348eb10'

// function MovieList({movies}) {
 
//   return (
//     <div className=" md:px-10 lg:mr-20 sm:flex  sm:flex-wrap justify-center  mt-16 w-full h-full ">
//       {movies.map(movie => (
//         <>
//         <MovieCard key={movie.id} movie={movie} />
//         <Details key={movie.id} movie={movie} />
//         </>
//       ))}
//     </div>
//   );
// }

// export default MovieList;