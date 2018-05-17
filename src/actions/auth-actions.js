/* eslint-disable no-unused-vars */

export function loginSubmit({ username, password }) {
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
        debugger
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

/* eslint-enable no-unused-vars */
