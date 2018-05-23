import { TODOS_LISTED, TODO_DELETED } from '../actions/todo-actions'

function TodoReducer(state = null, action) {
  const initialState = {
    todos: {}
  }

  if (state) {
    switch (action.type) {
    case TODOS_LISTED:
      const todos = action.payload.todos.reduce((acc, x) => {
        const newObj = { ...acc }
        newObj[x.id] = x
        return newObj
      }, {})
      return { ...state, todos }
    case TODO_DELETED:
      const newTodos = { ...state.todos }
      delete newTodos[action.payload]
      return { ...state, todos: newTodos }
    default:
      return state
    }
  }
  else {
    return { ...initialState }
  }
}

export default TodoReducer
