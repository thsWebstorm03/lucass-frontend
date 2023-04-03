import React from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import ProfileIntroForm from 'src/views/account/profile/profile-intro'
import ChangePasswordForm from 'src/views/account/profile/change-password'
import DeleteAccountForm from 'src/views/account/profile/delete-profile'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const Profile = props => {
   return (
      <div className='container'>
         <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={12} lg={6} >
               <ProfileIntroForm/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} >
               <ChangePasswordForm/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} >
               <DeleteAccountForm/>
            </Grid>
         </Grid>
      </div>

   )
}

export default Profile
