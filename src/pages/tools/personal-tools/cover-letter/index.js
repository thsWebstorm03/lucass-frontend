import React, {useState} from 'react'

import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import CoverLetterForm from 'src/views/tools/personal-tools/cover-letter/cover-letter'
import PlaygroundEditor from 'src/views/tools/personal-tools/cover-letter/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const CoverLetter = props => {

   const [coverLetter, setCoverLetter] = useState("")

   const handleCoverLetter = (text) => {
      setCoverLetter(text)
   }

   return (
      <Grid container spacing={6}>
         <Grid item xs={6} sm={24} md={6}>
            <CoverLetterForm handleCover={handleCoverLetter}/>
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
               <PlaygroundEditor data={coverLetter}/>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default CoverLetter
