import React, {useState} from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import ProductDescriptionForm from 'src/views/tools/ecommerce/product-description/product-description'
import PlaygroundEditor from 'src/views/tools/ecommerce/product-description/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const ProductDescription = props => {

   const [product, setProduct] = useState("")

   const handleEcomProduct = (text) => {
      setProduct(text)
   }
   
   return (
      <Grid container spacing={6}>
         <Grid item xs={6} sm={24} md={6}>
            <ProductDescriptionForm handleProduct={handleEcomProduct}/>
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
               <PlaygroundEditor data={product}/>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default ProductDescription
