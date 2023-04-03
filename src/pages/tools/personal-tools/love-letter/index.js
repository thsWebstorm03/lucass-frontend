import React, {useState} from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import LoveLetterForm from 'src/views/tools/personal-tools/love-letter/love-letter'
import PlaygroundEditor from 'src/views/tools/personal-tools/love-letter/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const LoveLetter = props => {

   const [loveLetter, setLoveLetter] = useState("")

   const handleLoveLetter = (text) => {
      setLoveLetter(text)
   }

   return (
      <Grid container spacing={6}>
         <Grid item xs={12} sm={12} md={6}>
            <LoveLetterForm handleLove={handleLoveLetter}/>
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
               <PlaygroundEditor data={loveLetter}/>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default LoveLetter
