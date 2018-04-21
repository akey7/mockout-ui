import React, { Component } from 'react'
import { loginSubmit } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './login-form-component.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      token: ''
    }
  }

  onUsernameChange = (event) => {
    event.preventDefault()
    this.setState({ ...this.state, username: event.target.value })
  }

  onPasswordChange = (event) => {
    event.preventDefault()
    this.setState({ ...this.state, password: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.loginSubmit({ username: this.state.username, password: this.state.password })
  }

  render() {
    return (
      <div className='login-form-component'>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Username:</label>
            <input onChange={this.onUsernameChange} />
          </div>
          <div>
            <label>Password:</label>
            <input onChange={this.onPasswordChange} />
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
