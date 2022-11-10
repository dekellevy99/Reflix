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

  _filterMoviesBySearch(movies) {
    let searchBar = this.state.searchBar;
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchBar)
    );
    return filteredMovies;
  }

  _getRentedMovies() {
    let rentedMovies = this.props.movies.filter(
      (movie) => this.props.user.rentedMovies.includes(movie.id) 
    );
    return this._filterMoviesBySearch(rentedMovies);
  }

  _getUnrentedMovies() {
    let unrentedMovies = this.props.movies.filter(
      (movie) => !this.props.user.rentedMovies.includes(movie.id) 
    );
    return this._filterMoviesBySearch(unrentedMovies);
  }

  handleSearchBar = (searchBarValue) => {
    this.setState({
      searchBar: searchBarValue,
    });
  };

  toggleRented = (movieId) => {
    this.props.toggleRented(this.props.user.id, movieId)
  }

  render() {
    let rentedMovies = this._getRentedMovies();
    let unrentedMovies = this._getUnrentedMovies();
    return (
      <div className="catalog-container">
        <SearchBar
          handleSearchBar={this.handleSearchBar}
          budget={this.props.user.budget}
        />

        {rentedMovies.length > 0 ? (
          <Movies
            key={"rented"}
            title={"Rented:"}
            movies={rentedMovies}
            toggleRented={this.toggleRented}
            isRented={true}
          />
        ) : null}

        {unrentedMovies.length > 0 ? (
          <Movies
            key={"unrented"}
            title={"Catalog:"}
            movies={unrentedMovies}
            toggleRented={this.toggleRented}
            isRented={false}
          />
        ) : null}
      </div>
    );
  }
}
