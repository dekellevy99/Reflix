import React, { Component } from "react";
import "../styles/MovieDetails.css";

export default class MovieDetails extends Component {
  render() {
    let movie = this.props.movie;
    return (
      <div className="movie-detail">
        <div className="left-side">
          <h1> {movie.title} </h1>
          <img src={movie.img} />
          <h1>({movie.year})</h1>
        </div>

        <div className="right-side">
          <p>{movie.descrShort}</p>
        </div>
      </div>
    );
  }
}
