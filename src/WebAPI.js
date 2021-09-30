import { getAuthToken } from "./utils"
const BASE_URL = 'https://student-json-api.lidemy.me'

export const getPosts = async () => {
  const result = await fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc`)
  return result.json()
}

export const getSinglePost = (id) => {
  return fetch(`${BASE_URL}/posts/${id}`).then(res => res.json())
}

export const login = async (username, password) => {
  const reuslt = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  return reuslt.json()
}

export const getMe = async () => {
  const token = getAuthToken()
  const result = await fetch(`${BASE_URL}/me`, {
    headers: {
      'authorization': `Bearer ${token}`
    }
  })
  return result.json()
}