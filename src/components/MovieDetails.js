import React, { Component } from 'react'
import { useParams } from 'react-router-dom';

export default class MovieDetails extends Component {
  render() {
    let movie = this.props.movie
    console.log(movie);
    return (
      <div>
        <p>{movie.title}</p>
        <img src={movie.img}/>
        <p>{movie.descrShort}</p>
      </div>
      
    )
  }
}
