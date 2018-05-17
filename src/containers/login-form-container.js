import React, { Component } from 'react'
import { loginSubmit } from '../actions/auth-actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './login-form-container.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      token: ''
    }
  }

  onusernameChange = (event) => {
    event.preventDefault()
    this.setState({ ...this.state, username: event.target.value })
  }

  onPasswordChange = (event) => {
    event.preventDefault()
    this.setState({ ...this.state, password: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.loginSubmit({ username: this.state.username, password: this.state.password })
  }

  render() {
    return (
      <div className='login-form-component'>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>username:</label>
            <input
              placeholder='username'
              onChange={this.onusernameChange}
              val={this.state.username} />
          </div>
          <div>
            <label>Password:</label>
            <input
              placeholder='Password'
              onChange={this.onPasswordChange}
              val={this.state.password} />
          </div>
          <input type="submit"/>
          <p>{ this.props.error }</p>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => state.auth
const mapDispatchToProps = (dispatch) => bindActionCreators({ loginSubmit: loginSubmit }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
