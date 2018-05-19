function AuthReducer(state = null, action) {
  const initialNotLoggedInState = {
    username: null,
    token: null,
    error: null,
    isLoggedIn: false
  }

  if (state) {
    switch (action.type) {
    case 'LOGIN_PASS':
      return {
        ...state,
        username: action.payload.username,
        isLoggedIn: true,
        error: null,
        token: action.payload.token
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload.error
      }
    case 'LOGOUT':
      return { ...initialNotLoggedInState }
    default:
      return state
    }
  }
  else {
    return { ...initialNotLoggedInState }
  }
}

export default AuthReducer
