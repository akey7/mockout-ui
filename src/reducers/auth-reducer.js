function AuthReducer(state = null, action) {
  if (state) {
    switch (action.type) {
    case 'LOGIN_SUBMIT': return {...state, email: action.payload.email}
    default: return state
    }
  }
  else {
    return ({ email: null, token: null })
  }
}

export default AuthReducer
