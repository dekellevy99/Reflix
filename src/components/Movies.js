import React, { Component } from "react";
import Movie from "./Movie";
import "../styles/Movies.css";

export default class Movies extends Component {
  render() {
    return (
      <div className="movies-container">
        <h1 className="movies-title">{this.props.title}</h1>
        <hr/>
        <div className="movies">
            {this.props.movies.map((movie) => (
                <Movie
                    key={movie.id}
                    movie={movie}
                    toggleRented={this.props.toggleRented}
                />
            ))}
        </div>
        
      </div>
    );
  }
}