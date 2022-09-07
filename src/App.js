
import React, { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import MovieList from './Components/MovieList/MovieList';
import { moviesData } from "./Data/Data";

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [inputSearch, setInputSearch] = useState("")

  const add = (newMovie) => {
    setMovies ([...movies, newMovie])
  }

  return (
    <div className="App">
      <h1>NOTFLIX</h1>
      <filterByName />
      <MovieList movies={movies}/>
      <AddMovie add={add} />
    </div>
  );
}

export default App;
