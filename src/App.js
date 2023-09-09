// import logo from './logo.svg';
// import './App.css';
// import         { render   }  from 'react-dom';

import React  from 'react';
// import ReactDOM from 'react-dom';

import Home from './components/Home';
import SingleMovieDisplay from './components/SingleMovieDisplay';
import Error from './components/Error';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMovieDisplay />} />
        <Route path="*" element={<Error />} />
      </Routes>

    
    </>
  );
}

export default App;
