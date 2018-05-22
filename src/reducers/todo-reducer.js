import { TODOS_LISTED } from '../actions/todo-actions'

function TodoReducer(state = null, action) {
  const initialState = {
    todos: []
  }

  if (state) {
    switch (action) {
    case TODOS_LISTED:
      debugger
      return { ...state, todos: action.payload.todos }
    default:
      return state
    }
  }
  else {
    return { ...initialState }
  }
}

export default TodoReducer
