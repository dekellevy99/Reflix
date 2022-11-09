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
                        <button>+</button> : 
                        <button>-</button>}
                </div>
        )
    }
}
