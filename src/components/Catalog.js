import React, { Component } from "react";
import "../styles/Catalog.css";
import RentedMovies from "./RentedMovies";
import UnrentedMovies from "./UnrentedMovies";

export default class Catalog extends Component {
  _filterMoviesByRentedStatus(rentedStatus) {
    const movies = this.props.movies;
    let filteredMovies = movies.filter(
      (movie) => movie.isRented === rentedStatus
    );
    return filteredMovies;
  }

  _getRentedMovies() {
    return this._filterMoviesByRentedStatus(true);
  }

  _getUnrentedMovies() {
    return this._filterMoviesByRentedStatus(false);
  }

  render() {
    return (
      <div className="catalog-container">
        <RentedMovies
          movies={this._getRentedMovies()}
          toggleRented={this.props.toggleRented}
        />
        <UnrentedMovies
          movies={this._getUnrentedMovies()}
          toggleRented={this.props.toggleRented}
        />
      </div>
    );
  }
}
