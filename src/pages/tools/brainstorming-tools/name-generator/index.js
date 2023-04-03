import React, {useState} from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import NameGeneratorForm from 'src/views/tools/brainstorming-tools/name-generator/name-generator'
import PlaygroundEditor from 'src/views/tools/brainstorming-tools/name-generator/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const NameGenerator = props => {

   const [name, setName] = useState("")

   const handleGenName = (text) => {
      setName(text)
   }

   return (
      <Grid container spacing={6}>
         <Grid item xs={12} sm={12} md={6}>
            <NameGeneratorForm handleName={handleGenName}/>
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
               <PlaygroundEditor data={name}/>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default NameGenerator
