import {useState, createContext} from 'react'
import axios from 'axios'

import toast from 'react-hot-toast'
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
import {BASE_URL} from 'src/configs'

const ChangePasswordForm = () => {
   
   const [values, setValues] = useState({newPass:'', confirm:'' });
   const [btnText, setBtnText] = useState("Save");

   const handleChange = (event, key) => {
      console.log(key,'p')
      setValues({
         ...values,
         [key]: event.target.value
      })
   }

   const onClick = async () => {
   
      if(confirm("Do you really update your profile?")){
         if(values.newPass == values.confirm){

            try {
               setBtnText("Updating...");
            
               const response = await axios.post(BASE_URL + '/api/profile/updatePassword', {
                  newPass : values.newPass
               })
               
               setBtnText("Save");
            } catch (error) {
               toast.error("Communication error occured")
               setBtnText("Save");
            }
         }
         else{
            toast.error("No match confirm password")
         }
         
      }

   }

   return (
      <Card>
         <CardHeader title='Change Password'/>
         <CardContent>
            <form onSubmit={e => e.preventDefault()}>
               <Grid container spacing={5}>
                  <Grid item xs={12}>
                     <Typography
                        sx={{
                        mb: 2,
                        fontWeight: 500
                     }}>
                        New Password
                     </Typography>
                     <TextField
                        fullWidth
                        label=''
                        placeholder=''
                        type='password'
                        InputLabelProps={{
                        shrink: true
                        }}
                        onChange={(e)=>handleChange(e, 'newPass')}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Typography
                        sx={{
                        mb: 2,
                        fontWeight: 500
                     }}>
                        Repeate New Password
                     </Typography>
                     <TextField
                        fullWidth
                        label=''
                        placeholder=''
                        InputLabelProps={{
                        shrink: true
                        }}
                        type='password'
                        onChange={(e)=>handleChange(e, 'confirm')}
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
                     }}>
                        <Button type='submit' fullWidth variant='contained' size='large' onClick={onClick}>
                           {btnText}
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
