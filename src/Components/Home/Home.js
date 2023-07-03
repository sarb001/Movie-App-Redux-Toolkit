import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';

import { useDispatch } from 'react-redux' ;
import {fetchAsyncMovies, fetchAsyncseries } from '../../Features/movies/movieSlice';

const Home = () => {

  const dispatch = useDispatch();

   useEffect(() => {
       dispatch(fetchAsyncMovies());
       dispatch(fetchAsyncseries());
   },[dispatch]);


  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  )
}

export default Home