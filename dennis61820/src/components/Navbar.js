import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <p className='animated'>dennis61820</p>
        </div>

        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Projects
        </NavLink>
        <NavLink
          to='/quiz'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Quiz
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
