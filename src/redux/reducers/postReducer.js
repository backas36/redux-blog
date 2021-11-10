import { createSlice } from '@reduxjs/toolkit'
import { getSinglePost, postNewPost } from '../../WebAPI'

export const postReducer = createSlice({
  name: 'posts',
  initialState: {
    isLoadingPost: true,
    post: null,
    newPostResponse: null
  },
  reducers: {
    setIsLoginPost: (state, action) => {
      state.isLoadingPost = action.payload
    },
    setPost: (state, action) => {
      state.post = action.payload
    },
    setNewPostResponse: (state, action) => {
      state.newPostResponse = action.payload
    }
  },
})


export const { setIsLoginPost, setPost, setNewPostResponse } = postReducer.actions

export const getPost = (id) => (dispatch) => {
  dispatch(setIsLoginPost(true))
  getSinglePost(id).then(res => {
    dispatch(setPost(res))
    dispatch(setIsLoginPost(false))
  }).catch(err => {
    console.log(err)
  })
}
export const newPost = (title, body) => dispatch => {
  return postNewPost(title, body)
    .then(res => {
      dispatch(setNewPostResponse(res))
      return res
    })
}
export default postReducer.reducer