import { LOGIN_FAIL, LOGOUT, LOGIN_PASS } from '../actions/auth-actions'

function AuthReducer(state = null, action) {
  const initialNotLoggedInState = {
    username: null,
    token: null,
    error: null
  }

  if (state) {
    switch (action.type) {
    case LOGIN_PASS:
      return {
        ...state,
        username: action.payload.username,
        error: null,
        token: action.payload.token
      }
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload.error
      }
    case LOGOUT:
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
