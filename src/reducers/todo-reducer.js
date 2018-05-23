import { TODOS_LISTED } from '../actions/todo-actions'

function TodoReducer(state = null, action) {
  const initialState = {
    todos: []
  }

  if (state) {
    switch (action.type) {
    case TODOS_LISTED:
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
