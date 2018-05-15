import React from 'react'
import { Redirect } from 'react-router-dom'

// <Route {...rest} render={(props) => <Component {...props} />} />

const ProtectRoute = ({ component: Component, ...rest }) => <Redirect to='/login' />

export default ProtectRoute
