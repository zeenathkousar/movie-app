import React, { useContext } from 'react'
import AppContext from './context'

export default function Search() {
  const {query, setQuery,isError} = useContext(AppContext);
  return(
    <>
  <section className='search-section'>
    <h2>Search a Movie</h2>
    <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
            <input type="text" placeholder='Search Here' value={query} onChange={(e) => setQuery(e.target.value)}/>
        </div>
    </form>
    <div className="card-error">
    <p>{isError.show && isError.msg}</p>
    </div>
  </section>
    </>
    
  )
}
