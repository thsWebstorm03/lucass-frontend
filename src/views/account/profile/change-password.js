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

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ChangePasswordForm = () => {
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
         <CardHeader title='Change Password' />
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
                        New Password
                     </Typography>
                     <TextField
                        fullWidth
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
                        Repeate New Password
                     </Typography>
                     <TextField
                        fullWidth
                        label=''
                        placeholder=''
                        InputLabelProps={{
                           shrink: true
                        }}
                     />
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

export default ChangePasswordForm
