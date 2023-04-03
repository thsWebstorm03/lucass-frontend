import React, {useState} from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import KeywordGeneratorForm from 'src/views/tools/blog-tools/keyword-generator/keyword-generator'
import PlaygroundEditor from 'src/views/tools/blog-tools/keyword-generator/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const KeywordGenerator = props => {

   const [keyword, setKeyword] = useState("")

   const handleBlogKeyword = (text) => {
      setKeyword(text)
   }

   return (
      <Grid container spacing={6}>
         <Grid item xs={12} sm={12} md={6}>
            <KeywordGeneratorForm handleKeyword = {handleBlogKeyword}/>
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
               <PlaygroundEditor data={keyword}/>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default KeywordGenerator
