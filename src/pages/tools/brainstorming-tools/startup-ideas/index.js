import React, {useState} from 'react'
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'
import StartupIdeasForm from 'src/views/tools/brainstorming-tools/startup-ideas/startup-ideas'
import PlaygroundEditor from 'src/views/tools/brainstorming-tools/startup-ideas/playgroundEditor'

import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const StartupIdeas = props => {

   const [idea, setIdea] = useState("")

   const handleGenIdea = (text) => {
      setIdea(text)
   }

   return (
      <Grid container spacing={6}>
         <Grid item xs={6} sm={24} md={6}>
            <StartupIdeasForm handleIdea={handleGenIdea}/>
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
               <PlaygroundEditor data={idea}/>
            </CardSnippet>
         </Grid>
      </Grid>
   )
}

export default StartupIdeas
