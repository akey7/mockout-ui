import React from 'react'
import './header-container.css'

const Header = (props) => (
  <div className='header-container'>
    <a className='title' href='#title'>Mockout</a>
    <a className='signin' href='#signin'>Sign In</a>
    <a href='#logout'>Logout</a>
  </div>
)

export default Header
