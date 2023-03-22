import React from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import BlogIntroForm from 'src/views/tools/blog-tools/blog-intro/blog-intro'
import PlaygroundEditor from 'src/views/tools/blog-tools/blog-intro/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const BlogIntro = props => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6} sm={24} md={6}>
        <BlogIntroForm />
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

export default BlogIntro
