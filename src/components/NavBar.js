import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../styles/NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/catalog'>Catalog</Link></li>
        </ul>

        <img className="logo" src="https://res.cloudinary.com/practicaldev/image/fetch/s--_b-IfdIg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.hashnode.com/res/hashnode/image/upload/v1647410910018/spTELtuIz.jpeg" />
      </div>
    )
  }
}
