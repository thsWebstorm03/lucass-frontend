import React, {useState} from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import PopArtForm from 'src/views/tools/images/pop-art/pop-art'
import PlaygroundEditor from 'src/views/tools/images/oil-painting/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const PopArt = props => {

   const [pop, setPop] = useState("")

   const handlePopPaint = (url) => {
      setPop(url)
   }

   return (
      <Grid container spacing={6}>
         <Grid item xs={12} sm={12} md={6}>
            <PopArtForm handlePop = {handlePopPaint}/>
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
                  {pop ? <img width={"100%"} height={"100%"} src={pop} alt='No img'/> : <></>}
               </div>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default PopArt
