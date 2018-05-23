const TODOS_LISTED = 'TODOS_LISTED'
const TODO_DELETED = 'TODO_DELETED'

const listTodos = ({ token }) => {
  const url = `${process.env.REACT_APP_API_URL}/todo`

  const opts = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  return (dispatch) => {
    fetch(url, opts)
      .then((result) => result.json())
      .then((result) => {
        dispatch({ type: TODOS_LISTED, payload: result })
      })
  }
}

const deleteTodo = ({ id }) => (dispatch) => dispatch({ type: TODO_DELETED, payload: id })

export { listTodos, deleteTodo, TODOS_LISTED, TODO_DELETED }
