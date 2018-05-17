import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginFormContainer from './login-form-container'

// const ProtectRoute = ({ component: Component, ...rest }) => (
//   <Redirect to='/login' />
// )

class ProtectRoute extends Component {
  render() {
    console.log(`>>> ProtectRoute ${this.props.isLoggedIn}`)
    if (this.props.isLoggedIn) {
      // return <p>YOU ARE LOGGED IN</p>
      const InnerComponent = this.props.component
      return <Route render={ (props) => <InnerComponent {...props} /> } />
    }
    else {
      return <LoginFormContainer />
    }
  }
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(ProtectRoute)
