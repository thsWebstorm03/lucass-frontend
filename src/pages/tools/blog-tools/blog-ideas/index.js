import React, {useState} from 'react'

import Grid from '@mui/material/Grid'
import CardSnippet from 'src/@core/components/card-snippet'
import BlogIdeasForm from 'src/views/tools/blog-tools/blog-ideas/blog-ideas'
import PlaygroundEditor from 'src/views/tools/blog-tools/blog-ideas/playgroundEditor'
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const BlogIdeas = (props) => {

   const [idea, setIdea] = useState("")

   const handleBlogIdea = (text) => {
      setIdea(text)
   }

   return (
      <Grid container spacing={6}>
         <Grid item xs={6} sm={24} md={6}>
            <BlogIdeasForm handleIdea={handleBlogIdea}/>
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
               <PlaygroundEditor data={idea}/>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default BlogIdeas