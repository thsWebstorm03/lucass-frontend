import React from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import SettingsForm from 'src/views/account/settings/setting'
import PlaygroundEditor from 'src/views/tools/blog-tools/full-article-writing/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const Settings = props => {
   return (
      <div className='container'>
         <Grid container spacing={6}>
            <Grid item xs={6} sm={24} md={6}>
               <SettingsForm/>
            </Grid>
         </Grid>
      </div>
   )
}

export default Settings
