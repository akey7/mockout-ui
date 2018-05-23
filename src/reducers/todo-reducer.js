import { TODOS_LISTED, TODO_DELETED } from '../actions/todo-actions'

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
    default:
      return state
    }
  }
  else {
    return { ...initialState }
  }
}

export default TodoReducer
