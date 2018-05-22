import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listTodos } from '../actions/todo-actions'

class TodosIndexComponent extends Component {
  componentDidMount() {
    this.props.listTodos({ token: this.props.token })
  }

  render() {
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
const mapDispatchToProps = (dispatch) => bindActionCreators({ listTodos }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodosIndexComponent)
