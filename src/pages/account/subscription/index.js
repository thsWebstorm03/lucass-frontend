import React from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import Overview from 'src/views/account/subscription/overview'
import ChangePasswordForm from 'src/views/account/profile/change-password'
import DeleteAccountForm from 'src/views/account/profile/delete-profile'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const Subscription = props => {
   return (
      <div className='container'>
         <Grid container spacing={6}>
            <Grid item sm={12} md={12} lg={12} xl={12} xxl={12}>
               <Overview/>
            </Grid>
         </Grid>
      </div>
   )
}

export default Subscription
