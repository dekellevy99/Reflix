import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/User.css'
import '../styles/Landing.css'

export default class User extends Component {
  render() {
    return (
        <Link className="user" to="catalog">
          {this.props.user}
        </Link>
    )
  }
}
