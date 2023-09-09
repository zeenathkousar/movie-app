import React from 'react'
import { useParams } from 'react-router-dom';

const SingleMovieDisplay=() => {
    const {id}=useParams();
  return (
    <>
    <div>
     our singlemovie {id}
    </div>
    </>
  )
};

export default SingleMovieDisplay;
