import React from 'react';
import Navbar from '../components/Navbar';
import MovieContent from '../components/MovieContent';
import Footer from '../components/Footer';
// import AppContext from '../components/context';


export default function Home() {
  return (
    <>
    <div>
        
        <Navbar />
        <MovieContent />
        <Footer />

    </div>
    </>
  )
}
