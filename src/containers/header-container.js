import React, { Component } from 'react'
import './header-container.css'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    return(
      <div className='header-container'>
        <a className='title' href='#title'>Mockout</a>
        <a className='signin' href='#signin'>{ this.props.username || 'Sign In' }</a>
        <a href='#logout'>{ this.props.username !== null ? 'Logout' : '' }</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(Header)
