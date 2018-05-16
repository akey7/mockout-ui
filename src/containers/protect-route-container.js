import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginFormContainer from './login-form-container'

// <Route {...rest} render={(props) => <Component {...props} />} />

// const ProtectRoute = ({ component: Component, ...rest }) => (
//   <Redirect to='/login' />
// )

class ProtectRoute extends Component {
  render() {
    console.log(`>>> ProtectRoute ${this.props.isLoggedIn}`)
    if (this.props.isLoggedIn) {
      return <p>YOU ARE LOGGED IN</p>
    }
    else {
      return <LoginFormContainer />
    }
  }
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(ProtectRoute)
