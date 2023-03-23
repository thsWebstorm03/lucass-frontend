import React from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import GeneralAdCopyForm from 'src/views/tools/digital-ad-copy/general-ad-copy/general-ad-copy'
import PlaygroundEditor from 'src/views/tools/digital-ad-copy/general-ad-copy/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const AdCopyVariants = props => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6} sm={24} md={6}>
        <GeneralAdCopyForm />
      </Grid>
      <Grid item xs={6} sm={24} md={6}>
        <CardSnippet
          sx={{ overflow: 'visible' }}
          title='Playground'
          code={{
            tsx: null,
            jsx: source.EditorControlledJSXCode
          }}
        >
          <PlaygroundEditor />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default AdCopyVariants
