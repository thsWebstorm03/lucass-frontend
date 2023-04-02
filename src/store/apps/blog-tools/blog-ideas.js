// ** Redux Imports
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Fetch Blog ideas
export const getBlogIdeas = createAsyncThunk('blogIdeas/getBlogIdeas', () => {
   // const response = await axios.post('/api/blog/ideas', {
   //    "name": "123",
   //    "des": "Please tell me how to make perfume.",
   //    "tone": "Friendly",
   //    "lang": "English"
   // })

   // return response.data
   return "World!"
})

export const blogIdeasSlice = createSlice({
   name: 'blogIdeas',
   initialState: {
      blogIdeaData: "Hello."
   },
   reducers: {
      removeIdeas: (state, action) => {
         state.blogIdeaData = ""
      }
   },
   extraReducers: builder => {
      builder.addCase(getBlogIdeas.fulfilled, (state, action) => {
         console.log("adfasdfasdf")
        state.blogIdeaData = action.payload
      })
    }
   
})

export const { removeIdeas } = blogIdeasSlice.actions

export default blogIdeasSlice.reducer
