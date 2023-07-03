import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCart/MovieCard';

const MovieListing = () => {

   const movies = useSelector(state => state.movies.movies);
   const series = useSelector(state => state.movies.shows);
   
   console.log('movies are  -',movies);
   console.log('Series  are  -',series);

   let rendermovies = "";
    rendermovies = movies.Response == "True"  ? (
     movies.Search.map((movie,index) => (
       <MovieCard  key = {index} data = {movie} /> 
     ))
    ) : (<> <h3> {movies.Error} </h3> </>)


    let renderseries = "";
    renderseries = series.Response == "True"  ? (
      series.Search.map((series,index) => (
       <MovieCard  key = {index} data = {series} /> 
     ))
    ) : (<> <h3> {series.Error} </h3> </>)


  return (
    <>
              <h2> 1-  Movies </h2>
              <div className="movie-container">
                  {rendermovies}
              </div>

              <h2> 2 - Shows List </h2>
              <div className="movie-container">
                  {renderseries}
              </div>

    </>
  )
}

export default MovieListing