import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/todo-actions'
import { bindActionCreators } from 'redux'

class Todo extends Component {
  delTodo = (event) => {
    event.preventDefault()
    this.props.deleteTodo({ id: this.props.id })
  }

  render() {
    const { id, todos } = this.props
    const item = todos[id].item

    return (<div>
      <button onClick={ this.delTodo }>DELETE</button>
      <span>{id}: {item}</span>
    </div>)
  }
}

const mapStateToProps = (state) => state.todos
const mapDispatchToProps = (dispatch) => bindActionCreators({ deleteTodo }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Todo)
