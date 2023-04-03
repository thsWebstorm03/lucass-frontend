import React, {useState} from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import GeneralAdCopyForm from 'src/views/tools/digital-ad-copy/general-ad-copy/general-ad-copy'
import PlaygroundEditor from 'src/views/tools/digital-ad-copy/general-ad-copy/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const AdCopyVariants = props => {

   const [general, setGeneral] = useState("")

   const handleAdGeneral = (text) => {
      setGeneral(text)
   }

   return (
      <Grid container spacing={6}>
         <Grid item xs={12} sm={12} md={6}>
            <GeneralAdCopyForm handleGeneral={handleAdGeneral}/>
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
               <PlaygroundEditor data={general}/>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default AdCopyVariants
