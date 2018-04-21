import React, { Component } from 'react'
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

export default LoginForm
