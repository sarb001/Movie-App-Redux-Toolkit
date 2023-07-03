import React from 'react'

const MovieCard = (props) => {
  let { data } =  props;
  return (
    <>
      <div className="card-item">
         <div className="card-inner">
            <div className="card-top">
                <img src = {data.Poster} alt = {data.Title} />
            </div>
           <div className="card-bottom">
                <div className="card-info">
                    <h4> {data.Title} </h4>
                    <p> {data.Yeat} </p>
                </div>
           </div>
         </div>
      </div>
      {data.Title}
    </>
  )
}

export default MovieCard