import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/User.css'
import '../styles/Landing.css'

export default class User extends Component {
  render() {
    let user = this.props.user
    return (
        <Link className="user" to={`catalog/users/${user.id}`}>
          {user.name}
        </Link>
    )
  }
}
