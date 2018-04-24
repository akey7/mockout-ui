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
        console.log(result)
        const payload = { username: username, token: result.token }
        dispatch({ type: 'LOGIN_SUBMIT', payload })
      })
  }
}

/* eslint-enable no-unused-vars */
