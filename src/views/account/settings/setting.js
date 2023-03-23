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
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const SettingsForm = () => {
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
         <CardHeader title='Settings' />
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
                        Preferred Output Language
                     </Typography>
                     <FormControl fullWidth>
                        <Select
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
                        <Button type='submit' variant='contained' size='large'>
                           Save
                        </Button>
                     </Box>
                  </Grid>
               </Grid>
            </form>
         </CardContent>
      </Card>
   )
}

export default SettingsForm
