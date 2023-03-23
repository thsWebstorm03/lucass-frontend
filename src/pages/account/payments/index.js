import React from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import PaymentsForm from 'src/views/account/payment/payment'
import PlaygroundEditor from 'src/views/tools/digital-ad-copy/ad-copy-variants/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const Payments = props => {
   return (
      <div className='container'>
         <Grid container spacing={6}>
            <Grid item xs={12} sm={24} md={12}>
               <PaymentsForm/>
            </Grid>
         </Grid>
      </div>
   )
}

export default Payments
