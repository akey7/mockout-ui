import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/todo-actions'
import { bindActionCreators } from 'redux'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.delTodo = this.delTodo.bind(this)
  }

  delTodo() {
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

const mapStateToProps = (state) => ({ todos: state.todos.todos, auth: state.auth })
const mapDispatchToProps = (dispatch) => bindActionCreators({ deleteTodo }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Todo)
