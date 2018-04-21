import React from 'react'
import './header-container.css'
import { connect } from 'react-redux'

const Header = (props) => (
  <div className='header-container'>
    <a className='title' href='#title'>Mockout</a>
    <a className='signin' href='#signin'>{ props.auth.username !== null ? props.auth.username : 'Sign In' }</a>
    <a href='#logout'>{ props.auth.username !== null ? 'Logout' : '' }</a>
  </div>
)

const mapStateToProps = (state) => {
  const result = {
    auth: state.auth
  }

  console.log(`AWWW shucks ${Object.keys(result.auth)}`)

  return result
}

export default connect(mapStateToProps)(Header)
