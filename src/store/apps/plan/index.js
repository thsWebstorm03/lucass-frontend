// ** Redux Imports
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {BASE_URL} from 'src/configs'

// ** Axios Imports
import axios from 'axios'

export const getPlans = createAsyncThunk('plan/getPlans', async () => {
   const response = await axios.get(BASE_URL + '/api/plans/getall')
   return response.data.plans

})

export const planSlice = createSlice({
   name: 'plan',
   initialState: {
      plans: []
   },
   reducers: {
      removeplans: (state, action) => {
         state.plans = []
      }
   },
   extraReducers: builder => {
      builder.addCase(getPlans.fulfilled, (state, action) => {
        state.plans = action.payload
      })
    }
   
})

export const { removeplans } = planSlice.actions

export default planSlice.reducer
