import React, {useState} from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import SketchForm from 'src/views/tools/images/sketch/sketch'
import PlaygroundEditor from 'src/views/tools/images/oil-painting/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const Sketch = props => {
   
   const [sketch, setSketch] = useState("")

   const handleSketchPaint = (url) => {
      setSketch(url)
   }

   return (
      <Grid container spacing={6}>
         <Grid item xs={12} sm={12} md={6}>
            <SketchForm handleSketch={handleSketchPaint}/>
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
                  {sketch ? <img width={"100%"} height={"100%"} src={sketch} alt='No img'/> : <></>}
               </div>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default Sketch
