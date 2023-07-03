import {  configureStore  } from  '@reduxjs/toolkit';
import movieReducer from './movies/movieSlice.js';

export const store = configureStore({
     reducer : {
           movies :  movieReducer,
     }
})