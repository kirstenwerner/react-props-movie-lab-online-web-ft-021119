import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    let x = movieData.map((movie) => {
        return (
          <MovieCard poster={movie.poster} title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres}/>
        )
    })
    console.log(x)
    return x
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
