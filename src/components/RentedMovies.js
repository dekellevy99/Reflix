import React, { Component } from "react";
import Movie from "./Movie";
import "../styles/Catalog.css";

export default class RentedMovies extends Component {
  render() {
    return (
      <div className="movies-container">
        {this.props.movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            toggleRented={this.props.toggleRented}
          />
        ))}
      </div>
    );
  }
}
