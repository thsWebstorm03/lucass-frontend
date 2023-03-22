import React from 'react'
import Grid from '@mui/material/Grid'

import CardInfluencer from 'src/views/history/cardInfulencer'

const History = props => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={24} sm={24} md={24}>
        <CardInfluencer />
      </Grid>
      <Grid item xs={24} sm={24} md={24}>
        <CardInfluencer />
      </Grid>
      <Grid item xs={24} sm={24} md={24}>
        <CardInfluencer />
      </Grid>
    </Grid>
  )
}

export default History
