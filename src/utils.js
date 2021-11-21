const TOKEN_NAME = 'token'

export const setAuthToken = token => {
  localStorage.setItem(TOKEN_NAME, token)
}

export const getAuthToken = token => {
  return localStorage.getItem(TOKEN_NAME)
}