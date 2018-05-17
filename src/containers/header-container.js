import React, { Component } from 'react'
import './header-container.css'
import { logout } from '../actions/auth-actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Header extends Component {
  onLogoutClick = (event) => {
    event.preventDefault()
    this.props.logout()
  }

  render() {
    return(
      <div className='header-container'>
        <a className='title' href='#title'>Mockout</a>
        <a className='signin' href='#signin'>{ this.props.username || 'Sign In' }</a>
        <a href='#' onClick={ this.onLogoutClick }>{ this.props.username !== null ? 'Logout' : '' }</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => state.auth
const mapDispatchToProps = (dispatch) => bindActionCreators({ logout }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
