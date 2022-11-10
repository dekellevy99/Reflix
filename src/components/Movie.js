import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Movie.css";

export default class Movie extends Component {
  toggleRented = () => {
    let movieId = this.props.movie.id;
    this.props.toggleRented(movieId);
  };

  render() {
    let movie = this.props.movie;

    return (
      <div className="movie">
        <Link to={`/movies/${movie.id}`}>
          <img src={movie.img} />
          <p>{movie.title}</p>
        </Link>
        
        <i
          className={`fas fa-lg ${movie.isRented ? 'fa-minus-circle' : 'fa-plus-circle'}`}
          onClick={this.toggleRented}
        ></i>
        
      </div>
    );
  }
}
