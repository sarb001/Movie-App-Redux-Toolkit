import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
     movies : {},
}

export  const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies' , async () => {
        try{

           const res = await axios.get(`https://www.omdbapi.com/?apikey=fe8b8917&s=bond&type=movie`);
           console.log('response in slice  -',res.data);
           return res.data;

        }catch(err){
          console.log('error is -',err);
        }
 })

const movieslice = createSlice({
     name: 'movies',
     initialState,
     reducers : {
         addMovies : (state,action) => {
             state.movies = action.payload;
         }
     },
     extraReducers : {
         [fetchAsyncMovies.pending] : () => {
            console.log('Pending ...');
         },
         [fetchAsyncMovies.fulfilled] : (state,action) => {
            console.log('fetched Successfully ');
            return{ ...state , movies :  action.payload };
         },
         [fetchAsyncMovies.rejected] : () => {
            console.log('Rejected here ..');
         },
     }
})

export const { addMovies } = movieslice.actions;
export default movieslice.reducer;