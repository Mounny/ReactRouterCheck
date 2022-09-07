import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies}) => {
  return (
    <div className='movie-list'>
        {movies.map( movie => <MovieCard movie={movie} key={movie.id}/>)}
    </div>
  )
}

export default MovieList