import React, { Component } from 'react'
import User from './User'
import '../styles/Landing.css'

export default class Landing extends Component {
  render() {
    return (
        <div className='landing-container'>
          <div className='content'>
              <p>WHO'S WATCHING?</p>
              <div className='users'>
                {this.props.users.map(user => <User user={user} key={user}/>)}
              </div>
          </div>
        </div>
    )
  }
}
