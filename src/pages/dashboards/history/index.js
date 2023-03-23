import React from 'react'
import Grid from '@mui/material/Grid'

import CardInfluencer from 'src/views/history/cardInfulencer'

const History = props => {
   const data = [
      {
         key: 1,
         title: 'Product description',
         subtitle: '2023-03-22'
      }, {
         key: 2,
         title: 'Instagram captions',
         subtitle: '2023-03-21'
      }, {
         key: 3,
         title: 'Full article writing',
         subtitle: '2023-03-21'
      }, {
         key: 4,
         title: 'Blog ideas',
         subtitle: '2023-03-21'
      }
   ]

   return (<Grid container spacing={6}>
         {data.map(item => {
            return <Grid key={item.key} item xs={24} sm={24} md={24}>
                        <CardInfluencer {...item}/>
                  </Grid>
            })
         }
      </Grid>
   )
}

export default History
