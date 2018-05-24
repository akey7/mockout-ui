import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createTodo } from '../../actions/todo-actions'

class TodoCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: ''
    }
  }

  onItemChange = (event) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      item: event.target.value
    })
  }

  onItemSubmit = (event) => {
    event.preventDefault()
    this.props.createTodo({ token: this.props.auth.token, item: this.state.item })
    this.setState({
      ...this.state,
      item: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.onItemSubmit}>
        <label>Create item: </label>
        <input onChange={this.onItemChange} value={this.state.item} />
        <input type='submit' />
      </form>
    )
  }
}


const mapStateToProps = (state) => ({ todos: state.todos, auth: state.auth })
const mapDispatchToProps = (dispatch) => bindActionCreators({ createTodo }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoCreate)
