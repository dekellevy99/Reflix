import React, { Component } from "react";
import Movies from "./Movies";
import SearchBar from "./SearchBar";

export default class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      searchBar: "",
    };
  }

  _filterMoviesBySearch() {
    const movies = this.props.movies;
    let searchBar = this.state.searchBar;
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchBar)
    );
    return filteredMovies;
  }

  _getRentedMovies() {
    return this._filterMoviesBySearch().filter((movie) => movie.isRented);
  }

  _getUnrentedMovies() {
    return this._filterMoviesBySearch().filter((movie) => !movie.isRented);
  }

  handleSearchBar = (searchBarValue) => {
    this.setState({
      searchBar: searchBarValue,
    });
  };

  render() {
    let rentedMovies = this._getRentedMovies();
    let unrentedMovies = this._getUnrentedMovies();
    console.log(rentedMovies.length);
    return (
      <div className="catalog-container">
        <SearchBar handleSearchBar={this.handleSearchBar} />
        {rentedMovies.length > 0 ? (
          <Movies
            key={"rented-movies"}
            title={"Rented:"}
            movies={rentedMovies}
            toggleRented={this.props.toggleRented}
          />
        ) : null}

        {unrentedMovies.length > 0 ? (
          <Movies
          key={"unrented-movies"}
          title={"Catalog:"}
          movies={unrentedMovies}
          toggleRented={this.props.toggleRented}
        />
        ) : null}
      </div>
    );
  }
}
