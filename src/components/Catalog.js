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
    return (
      <div className="catalog-container">
        <SearchBar handleSearchBar={this.handleSearchBar} />
        <Movies
          key={"rented-movies"}
          title={"Rented:"}
          movies={this._getRentedMovies()}
          toggleRented={this.props.toggleRented}
        />
        <Movies
          key={"unrented-movies"}
          title={"Catalog:"}
          movies={this._getUnrentedMovies()}
          toggleRented={this.props.toggleRented}
        />
      </div>
    );
  }
}
