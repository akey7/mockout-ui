import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// <Route {...rest} render={(props) => <Component {...props} />} />

// const ProtectRoute = ({ component: Component, ...rest }) => (
//   <Redirect to='/login' />
// )

class ProtectRoute extends Component {
  render() {
    console.log(`>>> ${Object.keys(this.props)}`)
    return (
      <Redirect to='/login' />
    )
  }
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(ProtectRoute)
