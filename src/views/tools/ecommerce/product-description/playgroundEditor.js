import React, { useEffect, useState, createContext} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import {EditorState, Modifier} from 'draft-js'
import ReactDraftWysiwyg from 'src/@core/components/react-draft-wysiwyg'

import {BASE_URL} from 'src/configs'

const PlaygroundEditor = (props) => {

   const router = useRouter();

   const [value, setValue] = useState(EditorState.createEmpty())

   const sendTextToEditor = (text) => {
      setValue(insertText(text, value));
   }

   const insertText = (text, editorState) => {
      const currentContent = editorState.getCurrentContent(),
         currentSelection = editorState.getSelection();

      const newContent = Modifier.replaceText(currentContent, currentSelection, text);

      const newEditorState = EditorState.push(editorState, newContent, 'insert-characters');

      return EditorState.forceSelection(newEditorState, newContent.getSelectionAfter());
   }

   useEffect(() => {
      sendTextToEditor(props.data)
   }, [props.data])

   useEffect(() => {
      console.log(router.query, 'query111')

      if (router.query) {
         axios
            .get(BASE_URL + '/api/prompts/getlogbyId', {
            params: {
               pId: router.query.pId
            }
         })
            .then(result => {
               console.log(result.data.logs)
               let log = result.data.logs;
               console.log(log.answerlist[0], 'ans')
               setValue(insertText(log.content, value))
            })
            .catch(err => console.log(err))
      }

   }, [])

   return (<ReactDraftWysiwyg
      editorState={value}
      onEditorStateChange={data => setValue(data)}
      editorStyle={{
      minHeight: '300px'
   }}/>)
}

export default PlaygroundEditor
