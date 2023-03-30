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
import { Divider } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import {BASE_URL} from 'src/configs'

const OilPaintingForm = (props) => {
   
   const [des, setDes] = useState("")

   const onDesChange = (e) => {
      setDes(e.target.value)
   }

   const [btnText, setBtnText] = useState("Create content")

   const onClick = () => {
      if (des.trim() == "") {
         toast.error("Please Fill in items")
      } else if (des.length < 30) {
         toast.error("Description must be more than 30 letters")
      } else {
         generateOilPaint()
      }
   }

   const generateOilPaint = async () => {

      setBtnText("Loading...");
      
      const response = await axios.post(BASE_URL + '/api/image/oilPaint', {
         "des": des,
      })
      setBtnText("Create Content");
      props.handlePaint(response.data.source);
   }

   return (
      <Card>
         <CardHeader title='Oil painting' />
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
                        Describe your image
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
                        onChange={onDesChange}
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

export default OilPaintingForm
