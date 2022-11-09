import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Movie.css'

export default class Movie extends Component {
    
    render() {
        let movie = this.props.movie

        return (
                <div className='movie'>
                    <Link to={`/movies/${movie.id}`}>
                        <img src={movie.img}/>
                        <p>{movie.title}</p>
                    </Link>
                    {movie.isRented ?
                        <i className="fas fa-minus-circle fa-lg"></i> :
                        <i className="fas fa-plus-circle fa-lg"></i>}
                </div>
        )
    }
}
