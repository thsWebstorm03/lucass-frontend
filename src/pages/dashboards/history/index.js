import React, {useState, createContext, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPromptLogs } from 'src/store/apps/history'

import toast from 'react-hot-toast'
import CardInfulencer from 'src/views/history/cardInfulencer'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import isEmpty from 'src/helper/is-empty'
import { useRouter } from 'next/router'
import { deletelog } from 'src/store/apps/history'

const History = props => {
   
   const dispatch = useDispatch();
   const router = useRouter();
   const {promptlogs} = useSelector(state => state.history);

   const deleteAll = () => {
      if(confirm("Do you really delete all logs?")){
         dispatch(deletelog(-1))
      }
   }

   useEffect(() => {
      dispatch(getPromptLogs())
   },[router.pathname])


   return (
      <div className='container'>
         <Button variant='outlined' sx={{mb : 2, mt : 2}} onClick={deleteAll}>Clear all...</Button>
         <Grid container spacing={6}>
            {
               !isEmpty(promptlogs) && promptlogs.map((data, index) => (
                  <Grid key={data.title} item xs={24} sm={24} md={24}>
                     <CardInfulencer {...data}/>
                  </Grid>
               ))
            }
         </Grid>
      </div>
   )
}

export default History
