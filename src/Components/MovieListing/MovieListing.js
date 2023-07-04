import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCart/MovieCard';

const MovieListing = () => {

   const movies = useSelector(state => state.movies.movies);
   const series = useSelector(state => state.movies.shows);

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
              <div className="text-main" style = {{textAlign:'center'}}>
                 <h2>   Movies Section   </h2>
              </div>
              <div className="movie-container" style = {{display:'grid' , gridTemplateColumns:'repeat(auto-fit,minmax(330px,1fr))' , margin:'1%'}}>
                  {rendermovies}
              </div>

              <div className="text-main" style = {{textAlign:'center'}}>
                <h2>  Shows Section  </h2>
              </div>
              <div className="movie-container" style = {{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(330px,1fr))',margin:'1%'}}> 
                  {renderseries}
              </div>

    </>
  )
}

export default MovieListing