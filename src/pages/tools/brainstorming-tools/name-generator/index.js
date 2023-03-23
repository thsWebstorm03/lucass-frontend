import React from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import NameGeneratorForm from 'src/views/tools/brainstorming-tools/name-generator/name-generator'
import PlaygroundEditor from 'src/views/tools/brainstorming-tools/name-generator/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const NameGenerator = props => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6} sm={24} md={6}>
        <NameGeneratorForm />
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

export default NameGenerator
