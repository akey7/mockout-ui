import React, { Component } from 'react'
import './App.css'
import LoginForm from './containers/login-form-container'
import Header from './containers/header-container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginForm />
      </div>
    )
  }
}

export default App
