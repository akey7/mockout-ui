/* eslint-disable no-unused-vars */

const loginSubmit = ({ username, password }) => {
  const url = `${process.env.REACT_APP_API_URL}/login`

  const opts = {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  return (dispatch) => {
    fetch(url, opts)
      .then((result) => result.json())
      .then((result) => {
        const { token, error } = result
        if (error) {
          dispatch({ type: 'LOGIN_FAIL', payload: { error } })
        }
        else {
          const payload = { username: username, token: result.token }
          dispatch({ type: 'LOGIN_PASS', payload })
        }
      })
  }
}

const logout = () => (dispatch) => dispatch({ type: 'LOGOUT', payload: {} })

export { loginSubmit, logout }

/* eslint-enable no-unused-vars */
