import React, {useEffect} from 'react'
import Grid from '@mui/material/Grid'

import CardInfluencer from 'src/views/library/cardInfulencer'

import {library} from 'src/configs'

const Library = props => {
   useEffect(() => {
      if (window) {
         if (document.querySelector('.modal-backdrop') != null) 
            document.querySelector('.modal-backdrop').classList.remove('show')
      }
   }, [])

   return (
      <div className='container'>
         <Grid container spacing={3}>
            {
              library.length > 0 && library.map(data => (
                  <Grid key={data.key} item xs={12} sm={6} md={4}>
                     <CardInfluencer {...data}/>
                  </Grid>
               ))
            }
         </Grid>
      </div>
   )
}

export default Library
