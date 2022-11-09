import React, { Component } from 'react'
import User from './User'

export default class Landing extends Component {
  render() {
    return (
        <div>
            <span>WHO'S WATCHING</span>
            {this.props.users.map(user => <User name={user} key={user}/>)}
        </div>
    )
  }
}
