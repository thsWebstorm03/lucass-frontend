import React, {useState} from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import BlogIntroForm from 'src/views/tools/blog-tools/blog-intro/blog-intro'
import PlaygroundEditor from 'src/views/tools/blog-tools/blog-intro/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const BlogIntro = props => {

   const [intro, setIntro] = useState("")

   const handleBlogintro = (text) => {
      setIntro(text)
   }

   return (
      <Grid container spacing={6}>
         <Grid item xs={12} sm={12} md={6}>
            <BlogIntroForm handleIntro={handleBlogintro}/>
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
               <PlaygroundEditor data={intro}/>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default BlogIntro
