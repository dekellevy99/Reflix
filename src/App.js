import { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Catalog from './components/Catalog';
import Landing from './components/Landing';
import MovieDetails from './components/MovieDetails';

const RENT_PRICE = 3

class App extends Component{
  constructor(){
    super()
    this.state = {
      users: [],
      movies: []
    }
  }

  componentDidMount(){
    let users = JSON.parse(localStorage.getItem('users'))
    let movies = JSON.parse(localStorage.getItem('movies'))
    this.setState({
      users: users,
      movies: movies
    })
  }

  _get_movie_by_id = (movieId) => {
    const movie = this.state.movies.find(movie => movie.id == movieId);
    return movie;
  }

  _get_user_by_id = (userId) => {
    let user =  this.state.users.find(user => user.id == userId);
    return user
  }

  toggleRented = (userId, movieId) => {
    const users = this.state.users
    let user = this._get_user_by_id(userId)
    let isMovieRented = user.rentedMovies.includes(movieId)
    if (isMovieRented){
      user.budget += RENT_PRICE;
      user.rentedMovies = user.rentedMovies.filter(id => id != movieId)
    }else if(user.budget < RENT_PRICE){
        alert("You Can't Afford This Purchase")
    }else{
        user.budget -= RENT_PRICE;
        user.rentedMovies.push(movieId)
    }

    this.setState({
      users: users
    }, () => {
      localStorage.setItem('users', JSON.stringify(this.state.users))
    })
  }

    
  render(){
    return (
      <Router>
        <div>
          <NavBar/>
          
          <Route exact path="/" render={() => <Landing users={this.state.users}/>} />
          <Route exact path="/catalog/users/:id" render={({match}) => <Catalog movies={this.state.movies} toggleRented={this.toggleRented} user={this._get_user_by_id(match.params.id)}/>} />
          <Route exact path='/movies/:id' render={({match}) => (<MovieDetails movie={this._get_movie_by_id(match.params.id)}/>)}/>
        </div>
      </Router>
    )
  }
}

export default App;
