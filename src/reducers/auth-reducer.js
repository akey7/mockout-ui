function AuthReducer(state = null, action) {
  if (state) {
    switch (action.type) {
    case 'LOGIN_SUBMIT': return {...state, username: action.payload.username}
    default: return state
    }
  }
  else {
    return ({ username: null, token: null })
  }
}

export default AuthReducer
