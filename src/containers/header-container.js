import React, { Component } from 'react'
import './header-container.css'
import { connect } from 'react-redux'

// const Header = ({ email }) => (
//   <div className='header-container'>
//     <a className='title' href='#title'>Mockout</a>
//     <a className='signin' href='#signin'>{ email || 'Sign In' }</a>
//     <a href='#logout'>{ email !== null ? 'Logout' : '' }</a>
//   </div>
// )

class Header extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    console.log(`email: ${this.props.token} ${Object.keys(this.props)}`)
    return(
      <div className='header-container'>
        <a className='title' href='#title'>Mockout</a>
        <a className='signin' href='#signin'>{ this.props.email || 'Sign In' }</a>
        <a href='#logout'>{ this.props.email !== null ? 'Logout' : '' }</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(Header)
