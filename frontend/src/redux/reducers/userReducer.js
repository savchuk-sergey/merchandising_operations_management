const SET_USER = 'SET_USER'
const SET_PASSWORD = 'SET_PASSWORD'
const SET_USERNAME = 'SET_USERNAME'

const initialState = {
  username: undefined,
  password: undefined,
  jwt: undefined
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        username: action.payload.username,
        jwt: action.payload.jwt
      }
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload.username
      }
    case SET_PASSWORD:
      return {
        ...state,
        username: action.payload.password
      }
    default:
      return state
  }
}

export const setUser = (username, jwt) => (
  {
    type: SET_USER,
    payload: {username, jwt}
  }
)

export const setUsername = (username) => (
  {
    type: SET_USERNAME,
    payload: {username, jwt}
  }
)

export const setPassword = (password) => (
  {
    type: SET_PASSWORD,
    payload: {password}
  }
)
export default userReducer;
