import {useState, createContext, useEffect} from 'react'
import axios from 'axios'

import toast from 'react-hot-toast'
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
import {BASE_URL} from 'src/configs'

const SettingsForm = () => {

   const [langs, setLangs] = useState([])
   const [current, setCurrent] = useState('')
   const [btnText, setBtnText] = useState('Save');

   const changeCurrentLang = (e) => {
      console.log(e.target.value)
      setCurrent(e.target.value)
   }

   const onSave = () => {
      if(confirm("Do you really set this as current language?")){
         
         setBtnText("Saving...")
         axios
            .post(BASE_URL + '/api/users/setlang',{
               lang : current
            })
            .then(response => {
               toast.success("Success!")
               setBtnText('Save')
            })
            .catch(err => {
               toast.error("Error!");
               setBtnText("Save")
            });
      }
   }

   useEffect(() => {
      axios
         .get(BASE_URL + '/api/langs/getlangs')
         .then(response => {
            setLangs(response.data.langs);
            if(response.data.langs.length) 
               setCurrent(response.data.langs[0].lang);
         })
         .catch(err => console.log("error"));

   },[])

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
                           value={current}
                           id='demo-simple-select-outlined'
                           labelId='demo-simple-select-outlined-label'
                           onChange={changeCurrentLang}
                        >
                           {
                              (langs.length >0) && langs.map(item => (
                                 <MenuItem key={item._id} value={item.lang}>{item.lang}</MenuItem>
                              ))
                           }
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
                        <Button type='submit' variant='contained' size='large' onClick={onSave}>
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

export default SettingsForm
