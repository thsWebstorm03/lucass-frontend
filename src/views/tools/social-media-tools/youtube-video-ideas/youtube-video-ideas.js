// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { Divider } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const YoutubeVideoIdeasForm = () => {
   // ** States
   const [values, setValues] = useState({ password: '', showPassword: false })

   const [confirmPassValues, setConfirmPassValues] = useState({ password: '', showPassword: false })

   const handleChange = prop => event => {
      setValues({
         ...values,
         [prop]: event.target.value
      })
   }

   const handleConfirmPassChange = prop => event => {
      setConfirmPassValues({
         ...confirmPassValues,
         [prop]: event.target.value
      })
   }

   const handleClickShowPassword = () => {
      setValues({
         ...values,
         showPassword: !values.showPassword
      })
   }

   const handleClickConfirmPassShow = () => {
      setConfirmPassValues({
         ...confirmPassValues,
         showPassword: !confirmPassValues.showPassword
      })
   }

   return (
      <Card>
         <CardHeader title='Youtube video ideas' />
         <Divider className='mb-3'></Divider>
         <CardContent>
            <form onSubmit={e => e.preventDefault()}>
               <Grid container spacing={5}>
               <Grid item xs={12}>
                     <Typography
                        sx={{
                           mb: 2,
                           fontWeight: 500
                        }}
                     >
                        Describe your product
                     </Typography>
                     <TextField
                        fullWidth
                        multiline
                        rows={5}
                        label=''
                        placeholder=''
                        InputLabelProps={{
                           shrink: true
                        }}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Typography
                        sx={{
                           mb: 2,
                           fontWeight: 500
                        }}
                     >
                        Tone
                     </Typography>
                     <FormControl fullWidth>
                        <Select
                           defaultValue='Friendly'
                           id='demo-simple-select-outlined'
                           labelId='demo-simple-select-outlined-label'
                        >
                           <MenuItem value={'Friendly'}>Friendly</MenuItem>
                           <MenuItem value={'Luxury'}>Luxury</MenuItem>
                           <MenuItem value={'Relaxed'}>Relaxed</MenuItem>
                        </Select>
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <Typography
                        sx={{
                           mb: 2,
                           fontWeight: 500
                        }}
                     >
                        Language
                     </Typography>
                     <FormControl fullWidth>
                        <Select
                           label=''
                           defaultValue='english'
                           id='demo-simple-select-outlined'
                           labelId='demo-simple-select-outlined-label'
                        >
                           <MenuItem value={'english'}>English</MenuItem>
                           <MenuItem value={'spanish'}>Spanish</MenuItem>
                        </Select>
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <Box
                        sx={{
                           gap: 5,
                           display: 'flex',
                           flexWrap: 'wrap',
                           alignItems: 'center',
                           justifyContent: 'space-between'
                        }}
                     >
                        <Button type='submit' fullWidth variant='contained' size='large'>
                           Create content
                        </Button>
                     </Box>
                  </Grid>
               </Grid>
            </form>
         </CardContent>
      </Card>
   )
}

export default YoutubeVideoIdeasForm
