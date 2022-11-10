import React, { Component } from "react";
import Movies from "./Movies";

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
        <Movies
          key={'rented-movies'}
          title={'Rented:'}
          movies={this._getRentedMovies()}
          toggleRented={this.props.toggleRented}
        />
        <Movies
          key={'unrented-movies'}
          title={'Catalog:'}
          movies={this._getUnrentedMovies()}
          toggleRented={this.props.toggleRented}
        />
      </div>
    );
  }
}
