import React, {useState} from 'react'

import Grid from '@mui/material/Grid'
import CardSnippet from 'src/@core/components/card-snippet'
import ShortTextHookForm from 'src/views/tools/ecommerce/short-text-hook/short-text-hook'
import PlaygroundEditor from 'src/views/tools/ecommerce/product-description/playgroundEditor'
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const ProductDescription = props => {

   const [shortText, setShortText] = useState("")

   const handleEcomShort = (text) => {
      setShortText(text)
   }

   return (
      <Grid container spacing={6}>
         <Grid item xs={12} sm={12} md={6}>
            <ShortTextHookForm handleShort = {handleEcomShort}/>
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
               <PlaygroundEditor data={shortText}/>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default ProductDescription
