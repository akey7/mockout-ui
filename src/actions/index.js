/* eslint-disable no-unused-vars */

export function loginSubmit(credentials) {
  // return {
  //   type: 'LOGIN_SUBMIT',
  //   payload: credentials
  // }

  return (dispatch) => {
    Promise.resolve(credentials)
      .then((x) => dispatch({ type: 'LOGIN_SUBMIT', payload: x}))
  }
}

/* eslint-enable no-unused-vars */
