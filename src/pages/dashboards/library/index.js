import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'

import CardInfluencer from 'src/views/library/cardInfulencer'

const Library = props => {
  useEffect(() => {
    if (window) {
      if (document.querySelector('.modal-backdrop') != null)
        document.querySelector('.modal-backdrop').classList.remove('show')
    }
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencer />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencer />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencer />
      </Grid>
    </Grid>
  )
}

export default Library
