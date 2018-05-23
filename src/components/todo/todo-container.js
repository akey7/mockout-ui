import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, updateTodo } from '../../actions/todo-actions'
import { bindActionCreators } from 'redux'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      editingItem: props.todos[props.id].item
    }

    this.delTodo = this.delTodo.bind(this)
    this.onSwitchToEdit = this.onSwitchToEdit.bind(this)
    this.onEditingChange = this.onEditingChange.bind(this)
    this.onCancelEditing = this.onCancelEditing.bind(this)
    this.onEditingSubmit = this.onEditingSubmit.bind(this)
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

  onEditingChange(event) {
    event.preventDefault()
    this.setState({
      ...this.state,
      editingItem: event.target.value
    })
  }

  onCancelEditing(event) {
    event.preventDefault()
    this.setState({
      ...this.state,
      editing: false
    })
  }

  onEditingSubmit(event) {
    event.preventDefault()
    this.props.updateTodo({
      updatedId: this.props.id,
      updatedItem: this.state.editingItem,
      token: this.props.auth.token
    })
    this.setState({
      ...this.state,
      editing: false
    })
  }

  componentWillReceiveProps(nextProps) {
    return {
      ...this.state,
      editing: false,
      editingItem: nextProps.todos[nextProps.id].item
    }
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
      <form onSubmit={this.onEditingSubmit}>
        <input onChange={this.onEditingChange} value={this.state.editingItem} />
        <button onClick={this.onCancelEditing}>CANCEL</button>
        <input type='submit' />
      </form>
    )

    return (<div>
      { this.state.editing ? editing : display }
    </div>)
  }
}

const mapStateToProps = (state) => ({ todos: state.todos, auth: state.auth })
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ deleteTodo, updateTodo }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(Todo)
