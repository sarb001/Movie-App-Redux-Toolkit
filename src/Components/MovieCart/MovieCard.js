import React from 'react'
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = (props) => {
  let { data } =  props;
  return (
    <>
      <div className="card-item" style = {{padding:'5%'}}>
        <Link to = {`/movie/${data.imdbID}`} style = {{textDecoration:'none'}}>
         <div className="card-inner">
            <div className="card-top" style= {{textAlign:'center'}} >
                <img src = {data.Poster} alt = {data.Title}  />
            </div>
           <div className="card-bottom">
                <div className="card-info" style = {{display:'grid' ,gridTemplateColumns:'1fr 1fr',textAlign:'center'}}>
                    <span> {data.Title} </span>
                    <span> {data.Year} </span>
                </div>
           </div>
         </div>
      </Link>
      </div>
    </>
  )
}

export default MovieCard