import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/todo-actions'
import { bindActionCreators } from 'redux'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      editingItem: this.props.item
    }

    this.delTodo = this.delTodo.bind(this)
    this.onSwitchToEdit = this.onSwitchToEdit.bind(this)
  }

  delTodo() {
    this.props.deleteTodo({ id: this.props.id, token: this.props.auth.token })
  }

  onSwitchToEdit() {
    this.setState({
      ...this.state,
      editing: true
    })
  }

  render() {
    const { id, todos } = this.props
    const item = todos[id].item

    const display = (
      <span>
        <button onClick={this.onSwitchToEdit}>EDIT</button>
        <button onClick={this.delTodo}>DELETE</button>
        <span>{id}: {item}</span>
      </span>
    )

    const editing = (
      <form>
        <input value={this.state.editingItem} />
        <button>CANCEL</button>
        <input type='submit' />
      </form>
    )

    return (<div>
      { this.state.editing ? editing : display }
    </div>)
  }
}

const mapStateToProps = (state) => ({ todos: state.todos, auth: state.auth })
const mapDispatchToProps = (dispatch) => bindActionCreators({ deleteTodo }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Todo)
