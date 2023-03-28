import {useState, useEffect} from 'react'

import {EditorState, Modifier} from 'draft-js'
import ReactDraftWysiwyg from 'src/@core/components/react-draft-wysiwyg'

const PlaygroundEditor = (props) => {
   const [value,
      setValue] = useState(EditorState.createEmpty())

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

   return (<ReactDraftWysiwyg
      editorState={value}
      onEditorStateChange={data => setValue(data)}
      editorStyle={{
      minHeight: '300px'
   }}/>)
}

export default PlaygroundEditor
