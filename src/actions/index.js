/* eslint-disable no-unused-vars */

export function loginSubmit({ email, password }) {
  const url = `${process.env.REACT_APP_API_URL}/login`

  const opts = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
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
        const payload = { email: email, token: result.token }
        dispatch({ type: 'LOGIN_SUBMIT', payload })
      })
  }
}

/* eslint-enable no-unused-vars */
