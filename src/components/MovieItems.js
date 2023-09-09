import React, { useContext } from 'react'
import AppContext from './context'

export default function MovieItems() {
  const {movie} = useContext(AppContext);
  return (
    <>
    <div className='container my-3 mx-3'>
    <div className='grid grid-4-col'>
      {movie.map((curMovie) => {

      const {imdbID,Poster,Title,Year} =curMovie;

      return <section to={`movie/${imdbID}`} key={imdbID}>

       <div className="card" style={{width: '18rem'}}>
          <img src={Poster} className="card-img-top" alt={imdbID}/>
          <div className="card-body">
            <h5 className="card-title">{Title}</h5>
            <p className="card-text">{Title} got release in the year {Year}. This movie ID id {imdbID}</p>
            <a href="/" className="btn btn-primary">Watch Here</a>
          </div>
       </div>
      </section>;
      })}
    </div>
    </div>
    </>
  )
}
