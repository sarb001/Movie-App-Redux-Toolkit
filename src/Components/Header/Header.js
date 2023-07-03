import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncseries } from '../../Features/movies/movieSlice';

const Header = () => {

   const [term,setTerm] = useState("");
   const dispatch = useDispatch();

    const submitdata = (e) => {
        e.preventDefault();
        console.log('term value is -',term);
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncseries(term));
    }

  return (
      <>
       <div className="header">
         <div className="logo">
            <Link  to = "/"> Movie App </Link>
         </div>
         <div className="search-bar">
          <form onSubmit = {submitdata}>
              <input type = "text"   value = {term}
               onChange = {(e) => setTerm(e.target.value)}
              placeholder = 'Search Movies' />
          </form>
         </div>
       </div>
      </>
    )
}

export default Header