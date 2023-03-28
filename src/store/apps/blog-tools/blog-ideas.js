// ** Redux Imports
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Fetch User Profile
export const getBlogIdeas = createAsyncThunk('blogIdeas/getBlogIdeas', async() => {
   const response = await axios.post('/api/blog/ideas', {
      "name": "123",
      "des": "Please tell me how to make perfume.",
      "tone": "Friendly",
      "lang": "English"
   })

   return response.data
})

export const blogIdeasSlice = createSlice({
   name: 'blogIdeas',
   initialState: {
      blogIdeaData: ""
   },
   reducers: {
      removeIdeas: (state, action) => {
         state.blogIdeaData = ""
      }
   },
   extraReducers: builder => {
      builder.addCase(getBlogIdeas.fulfilled, (state, action) => {
        state.blogIdeaData = action.payload
      })
    }
   
})

export const { removeIdeas } = blogIdeasSlice.actions

export default blogIdeasSlice.reducer
