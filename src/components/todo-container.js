import React from 'react'
import { connect } from 'react-redux'

const Todo = ({ id, todos }) => (
  <div>
    <button>DELETE</button>
    <span>{id}: {todos[id].item}</span>
  </div>
)

// const mapStateToProps = (state) => state.todos
// const mapDispatchToProps = (dispatch) => bindActionCreators({ listTodos }, dispatch)
//
// export default connect(mapStateToProps, mapDispatchToProps)(TodosIndex)

const mapStateToProps = (state) => state.todos
export default connect(mapStateToProps)(Todo)
