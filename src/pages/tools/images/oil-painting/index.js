import React, {useState} from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import OilPaintingForm from 'src/views/tools/images/oil-painting/oil-painting'
import PlaygroundEditor from 'src/views/tools/images/oil-painting/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const OilPainting = props => {

   const [oilPaint, setOilPaint] = useState("")

   const handleOilPaint = (url) => {
      setOilPaint(url)
   }
   
   return (
      <Grid container spacing={6}>
         <Grid item xs={12} sm={12} md={6}>
            <OilPaintingForm handlePaint = {handleOilPaint}/>
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
               <div style={{width : "250px", height: "250px"}}>
                  {oilPaint ? <img width={"100%"} height={"100%"} src={oilPaint} alt='No img'/> : <></>}
               </div>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default OilPainting
