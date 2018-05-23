import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listTodos } from '../actions/todo-actions'
import './todos-index-container.css'

class TodosIndex extends Component {
  componentDidMount() {
    this.props.listTodos({ token: this.props.token })
  }

  render() {
    return (
      <div className='todos-list'>
        <h1>
          Todos index
        </h1>
        <ul>
          { this.props.todos.map((todo) => <li key={ todo.id }>{ todo.item }</li>) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => state.todos
const mapDispatchToProps = (dispatch) => bindActionCreators({ listTodos }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodosIndex)
