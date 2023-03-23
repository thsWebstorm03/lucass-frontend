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
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Switch from '@mui/material/Switch';

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Divider } from '@mui/material'

const Overview = () => {
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

   const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
      height: 10,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
      },
    }));

    const IOSSwitch = styled((props) => (
      <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
      width: 52,
      height: 26,
      padding: 0,
      '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 0,
        left : 0,
        top : 0,
        position : 'relative',
        transitionDuration: '300ms',
        '&.Mui-checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
            opacity: 1,
            border: 0,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: '#33cf4d',
          border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color:
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
      },
      '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
        position : 'absolute'
      },
      '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
          duration: 500,
        }),
        width : '36px',
        height : '25px',
        position : 'absolute'
      },
    }));

   return (
      <Grid container spacing={6}>
         <Grid item xs={12}>
            <Card>
               <CardHeader title='Overview' />
               <CardContent>
                  <Divider className='mb-3'></Divider>
                  <Grid container spacing={5} >
                     <Grid item xs={10} className='mb-5'>
                        <Typography
                           sx={{
                              mb: 2,
                              fontWeight: 500
                           }}
                        >
                           Name
                        </Typography>
                        <Typography
                           sx={{
                              mb: 2,
                              fontWeight: 800
                           }}
                        >
                           Free - March 2023
                        </Typography>
                        
                     </Grid>
                     <Grid item xs={2}>
                        <Button type='button' variant='contained' size='large'>
                           Update plan
                        </Button>
                     </Grid>
                     
                     
                  </Grid>
                  <Divider className='mb-5'></Divider>
                  <Grid container spacing={5} className='mb-5'>
                     <Grid item xs={12} className='d-flex justify-content-between'>
                        <Typography
                           sx={{
                              fontWeight: 500
                           }}
                        >
                           Content Usage
                        </Typography>
                        <Typography
                           sx={{
                              fontWeight:500
                           }}
                        >
                           <b>244 words</b> <span className='text-lightgrey ps-1'> used of 1500 words</span>
                        </Typography>
                     </Grid>
                     <Grid item xs={12} >
                        <BorderLinearProgress variant="determinate" value={30} />
                     </Grid>
                     <Grid item xs={12} className='d-flex justify-content-start'>
                        <Typography
                           sx={{
                              fontWeight: 500
                           }}
                        >
                           <li>Words generated</li>
                        </Typography>
                        <Typography
                           sx={{
                              pl : 3,
                              fontWeight:500
                           }}
                        >
                           <li className='ps-3'>Available words</li>
                        </Typography>
                     </Grid>
                  </Grid>
                  <Grid container spacing={5} >
                     <Grid item xs={12} className='d-flex justify-content-between'>
                        <Typography
                           sx={{
                              fontWeight: 500
                           }}
                        >
                           Image Usage
                        </Typography>
                        <Typography
                           sx={{
                              fontWeight:500
                           }}
                        >
                           <b>244 images</b> <span className='text-lightgrey ps-1'> used of 500 images</span>
                        </Typography>
                     </Grid>
                     <Grid item xs={12} >
                        <BorderLinearProgress variant="determinate" value={30} />
                     </Grid>
                     <Grid item xs={12} className='d-flex justify-content-start'>
                        <Typography
                           sx={{
                              fontWeight: 500
                           }}
                        >
                           <li>Words generated</li>
                        </Typography>
                        <Typography
                           sx={{
                              pl : 3,
                              fontWeight:500
                           }}
                        >
                           <li className='ps-3'>Available words</li>
                        </Typography>
                     </Grid>
                  </Grid>
               </CardContent>
            </Card>
         </Grid>
         <Grid item xs={12}>
            <Card>
               <CardHeader title='Upgrade' subheader='Get more words per month by upgrading today!'/>
               <CardContent>
                  <Divider className='mb-5'></Divider>
                  <Grid container spacing={5} className='pt-3 mb-5'>
                     <Grid item xs={12} className='d-flex justify-content-center'>
                        <span>Monthly</span>
                        <FormControlLabel
                           control={<IOSSwitch sx={{ ml: 5 }} defaultChecked /> }
                           label='Yearly'
                        />
                        <div style={{textAlign:"center", width:"120px", borderRadius:"10px",color:"#FFFFFF",backgroundColor:"rgb(29 150 255)",fontSize:"12px",height:"20px", transform:'translateY(-20px)'}}>Save up to 10%</div>
                     </Grid>
                  </Grid>
                  
                  <Grid container spacing={5}>
                     <Grid item xs={4}>
                        <Card>
                           <CardContent className='text-center p-5'>
                              <p>
                                 <sup>$</sup>
                                 <span className='h1 fs-1'>10</span>
                                 <span>/mo</span>
                              </p>
                              <p className='h3'>Pro</p>
                              <Typography
                                 sx={{
                                    fontSize : '20px',
                                    fontWeight:500
                                 }}
                              >
                                 Unlock advanced features and priority support.
                              </Typography>
                              <ul className='unordered-list mt-3'>
                                 <li>5000 monthly words</li>
                                 <li>Access to all tools</li>
                                 <li>Genie editor tool</li>
                                 <li>Product support</li>
                              </ul>
                              <Button type='button' variant='contained' size='large' className='mt-5 mb-2'>
                                 Update Now
                              </Button>
                              <Typography
                                 sx={{
                                    fontSize : '18px',
                                    fontWeight:200
                                 }}
                              >
                                 Unlock advanced features and priority support.
                              </Typography>
                           </CardContent>
                           
                        </Card>
                     </Grid>
                     <Grid item xs={4}>
                     <Card>
                           <CardContent className='text-center p-5'>
                              <p>
                                 <sup>$</sup>
                                 <span className='h1 fs-1'>20</span>
                                 <span>/mo</span>
                              </p>
                              <p className='h3'>Business</p>
                              <Typography
                                 sx={{
                                    fontSize : '20px',
                                    fontWeight:500
                                 }}
                              >
                                 Access premium tools and team collaboration options.
                              </Typography>
                              <ul className='unordered-list mt-3'>
                                 <li>10000 monthly words</li>
                                 <li>Access to all tools</li>
                                 <li>Genie editor tool</li>
                                 <li>Product support</li>
                              </ul>
                              <Button type='button' variant='contained' size='large' className='mt-5 mb-2'>
                                 Update Now
                              </Button>
                              <Typography
                                 sx={{
                                    fontSize : '18px',
                                    fontWeight:200
                                 }}
                              >
                                 Unlock advanced features and priority support.
                              </Typography>
                           </CardContent>
                           
                        </Card>
                     </Grid>
                     <Grid item xs={4}>
                     <  Card>
                           <CardContent className='text-center p-5'>
                              <p>
                                 <sup>$</sup>
                                 <span className='h1 fs-1'>50</span>
                                 <span>/mo</span>
                              </p>
                              <p className='h3'>Pro</p>
                              <Typography
                                 sx={{
                                    fontSize : '20px',
                                    fontWeight:500
                                 }}
                              >
                                 Customizable solutions for large projects and dedicated support.
                              </Typography>
                              <ul className='unordered-list mt-3'>
                                 <li>50000 monthly words</li>
                                 <li>Access to all tools</li>
                                 <li>Genie editor tool</li>
                                 <li>Product support</li>
                              </ul>
                              <Button type='button' variant='contained' size='large' className='mt-5 mb-2'>
                                 Update Now
                              </Button>
                              <Typography
                                 sx={{
                                    fontSize : '18px',
                                    fontWeight:200
                                 }}
                              >
                                 Unlock advanced features and priority support.
                              </Typography>
                           </CardContent>
                           
                        </Card>
                     </Grid>
                  </Grid>
               </CardContent>
            </Card>
         </Grid>
      </Grid>
   )
}

export default Overview
