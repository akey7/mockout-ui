import React, { Component } from 'react'
import './login-form-component.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='login-form-component'>
        <form>
          <div>
            <label>Username:</label>
            <input/>
          </div>
          <div>
            <label>Password:</label>
            <input/>
          </div>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default LoginForm
