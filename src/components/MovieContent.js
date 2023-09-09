import React from 'react'
import MovieItems from './MovieItems'

export default function MovieContent() {
  return (
  <div className="row my-3 my-2">
    <div className="col-md-4">
      <MovieItems />
    </div>
    <div className="col-md-4">
      <MovieItems />
    </div>
    <div className="col-md-4">
      <MovieItems />
    </div>

  </div>


    
  )
}
