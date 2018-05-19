import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginFormContainer from './login-form-container'

// NOTE: This is a function component so I don't need to worry about
// shadowing Component because I didn't destructure it in an import.
const ProtectRoute = ({ component: Component, token, isLoggedIn, ...rest }) => {
  if (token) {
    return <Route render={ (props) => <Component {...props} /> } />
  }
  else {
    return <LoginFormContainer />
  }
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(ProtectRoute)
