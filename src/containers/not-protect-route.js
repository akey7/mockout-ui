import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class NotProtectRoute extends Component {
  render() {
    console.log(`>>> NotProtectRoute ${this.props.isLoggedIn}`)
    return (
      <Redirect to='/' />
    )
  }
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(NotProtectRoute)
