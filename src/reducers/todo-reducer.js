import { TODOS_LISTED } from '../actions/todo-actions'

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
    default:
      return state
    }
  }
  else {
    return { ...initialState }
  }
}

export default TodoReducer
