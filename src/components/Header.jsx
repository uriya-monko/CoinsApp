import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

function Header(props) {
  return (
    <header className="header">
    <h1>{props.title}</h1>
    <nav>
        <NavLink  className="link" to='/'>Home</NavLink>
      
    </nav>
    </header>
  )
}

export default Header