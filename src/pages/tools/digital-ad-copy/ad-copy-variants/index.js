import React, {useState} from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import AdCopyVariantsForm from 'src/views/tools/digital-ad-copy/ad-copy-variants/ad-copy-variants'
import PlaygroundEditor from 'src/views/tools/digital-ad-copy/ad-copy-variants/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const AdCopyVariants = props => {

   const [variants, setVariants] = useState("")

   const handleAdVariants = (text) => {
      setVariants(text)
   }

   return (
      <Grid container spacing={6}>
         <Grid item xs={12} sm={12} md={6}>
            <AdCopyVariantsForm handleVariants = {handleAdVariants}/>
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
               <PlaygroundEditor data={variants}/>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default AdCopyVariants
