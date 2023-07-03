import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCart/MovieCard';

const MovieListing = () => {

   const movies = useSelector(state => state.movies.movies);
   console.log('movies are  -',movies);

   let rendermovies = "";

   rendermovies = movies.Response == "True"  ? (
     movies.Search.map((movie,index) => (
       <MovieCard  key = {index} data = {movie} /> 
     ))
    ) : (
      <>  
          <h3> {movies.Error} </h3>
      </>
    )

  return (
    <>
              <h2> Movies </h2>
              <div className="movie-container">
                  {rendermovies}
              </div>
    </>
  )
}

export default MovieListing