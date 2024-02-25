import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return <header>
  <ul className='navbar'>
      <li><NavLink to='/'>Domů</NavLink></li>
      <li><NavLink to='/qrgenerator'>QR generator</NavLink></li>
   
      <li> <NavLink to='/nytsearch' >NYT search</NavLink></li>
  </ul>
</header>
}

export default NavBar
