import {
  TODOS_LISTED,
  TODO_DELETED,
  TODO_UPDATED
} from '../actions/todo-actions'

function TodoReducer(state = null, action) {
  const initialState = {}

  if (state) {
    switch (action.type) {
    case TODOS_LISTED:
      const todos = action.payload.todos.reduce((acc, x) => {
        const newObj = { ...acc }
        newObj[x.id] = x
        return newObj
      }, {})
      return todos
    case TODO_DELETED:
      const newTodos = { ...state }
      delete newTodos[action.payload]
      return newTodos
    case TODO_UPDATED:
      const updatedTodos = { ...state }
      const { updatedItem, updatedId } = action.payload
      updatedTodos[updatedId] = updatedItem
      return updatedTodos
    default:
      return state
    }
  }
  else {
    return { ...initialState }
  }
}

export default TodoReducer
