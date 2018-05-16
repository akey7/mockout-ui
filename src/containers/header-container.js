import React, { Component } from 'react'
import './header-container.css'
import { connect } from 'react-redux'

// const Header = ({ username }) => (
//   <div className='header-container'>
//     <a className='title' href='#title'>Mockout</a>
//     <a className='signin' href='#signin'>{ username || 'Sign In' }</a>
//     <a href='#logout'>{ username !== null ? 'Logout' : '' }</a>
//   </div>
// )

class Header extends Component {
  // constructor(props) {
  //   super(props)
  // }

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
