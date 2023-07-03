import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
     movies : {},
     shows :  {}
}

export  const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies' , async () => {
        try{
           const res = await axios.get(`https://www.omdbapi.com/?apikey=fe8b8917&s=harry&type=movie`);
           console.log('response in Movies -',res.data);
           return res.data;

        }catch(err){
          console.log('error is -',err);
        }
 })

 export  const fetchAsyncseries = createAsyncThunk('movies/fetchAsyncSeries' , async () => {
    try{
       const res = await axios.get(`https://www.omdbapi.com/?apikey=fe8b8917&s=harry&type=series`);
       console.log('response in Series -',res.data);
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
             state.shows = action.payload;
         }
     },
     extraReducers : {
         [fetchAsyncMovies.pending] : () => {
            console.log('Pending ...');
         },
         [fetchAsyncMovies.fulfilled] : (state,action) => {
            console.log('fetched Movies ');
            return{ ...state , movies :  action.payload };          // initialstate ( movies ) : action.payload
         },
         [fetchAsyncMovies.rejected] : () => {
            console.log('Rejected here ..');
         },
         [fetchAsyncseries.fulfilled] : (state,action) => {
            console.log('fetched series ');
            return { ...state , shows : action.payload };        // initialstate ( shows ) : action.payload
         }
     }
})

export const { addMovies } = movieslice.actions;
export default movieslice.reducer;