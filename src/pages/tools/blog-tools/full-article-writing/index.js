import React from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import FullArticleWritingComp from 'src/views/tools/blog-tools/full-article-writing/full-article-writing'
import PlaygroundEditor from 'src/views/tools/blog-tools/full-article-writing/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const FullArticleWriting = props => {
   return (
      <Grid container spacing={6}>
         <Grid item xs={6} sm={24} md={6}>
            <FullArticleWritingComp/>
         </Grid>
         <Grid item xs={6} sm={24} md={6}>
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

export default FullArticleWriting
