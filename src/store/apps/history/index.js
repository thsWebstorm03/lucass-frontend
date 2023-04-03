// ** Redux Imports
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {BASE_URL} from 'src/configs'

// ** Axios Imports
import axios from 'axios'

export const getPromptLogs = createAsyncThunk('history/getPromptLogs', async () => {

   const response = await axios.get(BASE_URL + '/api/prompts/getlogs');
   
   return response.data.logs

})

export const deletelog = createAsyncThunk('history/deletelog', async (id, {dispatch}) => {

   const response = await axios.post(BASE_URL + '/api/prompts/deletelog',{id});
   
   if(response.data.msg == "success"){

      await dispatch(getPromptLogs());

      return response.data.logs
   }

})

export const historySlice = createSlice({
   name: 'history',
   initialState: {
      promptlogs: []
   },
   reducers: {
      removelogs: (state, action) => {
         state.promptlogs = []
      }
   },
   extraReducers: builder => {
      builder.addCase(getPromptLogs.fulfilled, (state, action) => {
        state.promptlogs = action.payload
      })
    }
   
})

export const { removelogs } = historySlice.actions

export default historySlice.reducer
