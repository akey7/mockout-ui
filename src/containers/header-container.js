import React from 'react'
import './header-container.css'
import { connect } from 'react-redux'

const Header = ({ auth }) => (
  <div className='header-container'>
    <a className='title' href='#title'>Mockout</a>
    <a className='signin' href='#signin'>{ auth.name !== null ? auth.name : 'Sign In' }</a>
    <a href='#logout'>{ auth.name !== null ? 'Logout' : '' }</a>
  </div>
)

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps)(Header)
