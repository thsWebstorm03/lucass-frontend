import React from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import ContentWriterForm from 'src/views/tools/blog-tools/test-adir/test-adir'
import PlaygroundEditor from 'src/views/tools/blog-tools/test-adir/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const TestAdir = props => {
   return (
      <Grid container spacing={6}>
         <Grid item xs={12} sm={12} md={6}>
            <ContentWriterForm/>
         </Grid>
         <Grid item xs={12} sm={12} md={6}>
            <CardSnippet
               sx={{
               overflow: 'visible'
            }}
               title='Playground'
               code={{
               tsx: null,
               jsx: source.EditorControlledJSXCode
            }}>
               <PlaygroundEditor/>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default TestAdir
