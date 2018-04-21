import React, { Component } from 'react'
import './App.css'
import LoginForm from './components/login-form-component'
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
