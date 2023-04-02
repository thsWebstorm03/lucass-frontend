import React, {useState, createContext, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPromptLogs } from 'src/store/apps/history'

import toast from 'react-hot-toast'
import CardInfulencer from 'src/views/history/cardInfulencer'
import Grid from '@mui/material/Grid'

import isEmpty from 'src/helper/is-empty'

const History = props => {
   
   const dispatch = useDispatch();

   const {promptlogs} = useSelector(state => state.history);

   useEffect(() => {
      dispatch(getPromptLogs())
   },[])


   return (
      <Grid container spacing={6}>
         {
            !isEmpty(promptlogs) && promptlogs.map((data, index) => (
               <Grid key={data.title} item xs={24} sm={24} md={24}>
                  <CardInfulencer {...data}/>
               </Grid>
            ))
         }
      </Grid>
   )
}

export default History
