import postData from './utils/postData'

const signIn = (username, password) => {
  return postData('http://localhost:3000/api/auth/signin', {
    username,
    password,
  })
    .then((r) => {
      M.toast({ html: r.message })
      r.accessToken
        ? window.localStorage.setItem(
            'token',
            r.accessToken
          )
        : null
      return r
    })
    .catch((e) => {
      M.toast({ html: e.message })
    })
}

export const signOut = () => {
  localStorage.clear()
}

export default signIn
