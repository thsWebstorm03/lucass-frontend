// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
  width: 48,
  height: 48,
  marginBottom: theme.spacing(8.5)
}))

const FileUploaderSingle = () => {
  // ** State
  const [files, setFiles] = useState([])

  // ** Hooks
  const theme = useTheme()

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file)))
    }
  })

  const img = files.map(file => (
    <img key={file.name} alt={file.name} className='single-file-image' src={URL.createObjectURL(file)} />
  ))

  return (
    <Box {...getRootProps({ className: 'dropzone' })} sx={files.length ? { height: 450 } : {}}>
      <input {...getInputProps()} />
      {files.length ? (
        img
      ) : (
        <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Img alt='Upload img' src={`/images/misc/upload-${theme.palette.mode}.png`} />
          <Typography variant='h5' sx={{ mb: 2.5 }}>
            Drop files here or click to upload.
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            (This is just a demo drop zone. Selected files are not actually uploaded.)
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default FileUploaderSingle
