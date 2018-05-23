import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/todo-actions'
import { bindActionCreators } from 'redux'

class Todo extends Component {
  render() {
    return (<div>
      <button onClick={() => this.props.deleteTodo({ id: this.props.id })}>DELETE</button>
      <span>{this.props.id}: {this.props.todos[this.props.id].item}</span>
    </div>)
  }
}

const mapStateToProps = (state) => state.todos
const mapDispatchToProps = (dispatch) => bindActionCreators({ deleteTodo }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Todo)
