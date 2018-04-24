import React, { Component } from 'react'
import { loginSubmit } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './login-form-container.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      token: ''
    }
  }

  onEmailChange = (event) => {
    event.preventDefault()
    this.setState({ ...this.state, email: event.target.value })
  }

  onPasswordChange = (event) => {
    event.preventDefault()
    this.setState({ ...this.state, password: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.loginSubmit({ email: this.state.email, password: this.state.password })
  }

  render() {
    return (
      <div className='login-form-component'>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Email:</label>
            <input
              placeholder='email'
              onChange={this.onEmailChange}
              val={this.state.email} />
          </div>
          <div>
            <label>Password:</label>
            <input
              placeholder='Password'
              onChange={this.onPasswordChange}
              val={this.state.password} />
          </div>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ loginSubmit: loginSubmit }, dispatch)
)

export default connect(null, mapDispatchToProps)(LoginForm)
