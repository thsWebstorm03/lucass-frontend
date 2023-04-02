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

const DeleteAccountForm = () => {
   
   const [btnText, setBtnText] = useState("Delete");

   const onClick = async () => {

      if(confirm("Do you really update your profile?")){
         try {
            setBtnText("Updating...");
         
            const response = await axios.post(BASE_URL + '/api/profile/deleteAccount', {
               ...values
            })
            
            setBtnText("Delete");
         } catch (error) {
            toast.error("Communication error occured")
            setBtnText("Delete");
         }
         
      }

   }

   return (
      <Card>
         <CardHeader title='Delete account' />
         <CardContent>
            <form onSubmit={e => e.preventDefault()}>
               <Grid container spacing={5}>
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

export default DeleteAccountForm
