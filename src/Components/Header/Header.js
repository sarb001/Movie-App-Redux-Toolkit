import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncseries } from '../../Features/movies/movieSlice';
import  user from '../../images/user (1).png';
import './Header.css';

const Header = () => {

    const [term,setTerm] = useState("");
    const dispatch = useDispatch();

    const submitdata = (e) => {
        e.preventDefault();
        console.log('term value is -',term);
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncseries(term));
        setTerm(" ");
    }

  return (
      <>
       <div className="header">
          <div className="logo">
              <Link  to = "/"> Movie App </Link>
          </div>
          <div className = "search-bar">
              <div className="form-section">
                  <form onSubmit = {submitdata} style = {{margin:'3%'}}>
                      <input type = "text"   value = {term}
                      onChange = {(e) => setTerm(e.target.value)}
                      placeholder = 'Search Movies' style = {{width:'100%' , padding:'2% 0%',borderRadius:'14px'}} />
                  </form>
                </div>
          </div>
          <div className="main-img">
                    <img src = {user}  alt = "user" />
          </div>
       </div>
      </>
    )
}

export default Header