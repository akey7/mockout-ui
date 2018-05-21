import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginSubmit } from '../actions/auth-actions'
import { bindActionCreators } from 'redux'

class TodosIndexComponent extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>
          Todos index
        </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => state.todos
export default connect(mapStateToProps)(TodosIndexComponent)
