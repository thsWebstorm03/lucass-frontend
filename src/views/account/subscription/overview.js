// ** React Imports
import {useEffect, useState} from 'react'

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
import {styled} from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';
import Switch from '@mui/material/Switch';
import ToggleButton from '@mui/material/ToggleButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import {Divider} from '@mui/material'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {getPlans} from 'src/store/apps/plan'
import isEmpty from 'src/helper/is-empty'
import Modal from 'react-modal';

import { Helmet } from 'react-helmet'

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
   height: 10,
   borderRadius: 5,
   [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light'
            ? 200
            : 800]
   },
   [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light'
         ? '#1a90ff'
         : '#308fe8'
   }
}));

const IOSSwitch = styled((props) => (<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props}/>))(({theme}) => ({
   width: 52,
   height: 26,
   padding: 0,
   '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 0,
      left: 0,
      top: 0,
      position: 'relative',
      transitionDuration: '300ms',
      '&.Mui-checked': {
         transform: 'translateX(16px)',
         color: '#fff',
         '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.mode === 'dark'
               ? '#2ECA45'
               : '#65C466',
            opacity: 1,
            border: 0
         },
         '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5
         }
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
         color: '#33cf4d',
         border: '6px solid #fff'
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
         color: theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600]
      },
      '&.Mui-disabled + .MuiSwitch-track': {
         opacity: theme.palette.mode === 'light'
            ? 0.7
            : 0.3
      }
   },
   '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
      position: 'absolute'
   },
   '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light'
         ? '#E9E9EA'
         : '#39393D',
      opacity: 1,
      transition: theme
         .transitions
         .create(['background-color'], {duration: 500}),
      width: '36px',
      height: '25px',
      position: 'absolute'
   }
}));

const customStyles = {
   content : {
     top                   : '50%',
     left                  : '50%',
     right                 : 'auto',
     bottom                : 'auto',
     marginRight           : '-50%',
     transform             : 'translate(-50%, -50%)',
     borderRadius : "20px",
     width : "500px"
   }
 };



const Overview = (props) => {

   const router = useRouter();
   const dispatch = useDispatch();

   const {plans} = useSelector(state => state.plan);

   const [checked, setChecked] = useState(false)
   const [show, setShow] = useState(false);
   const [selPlan, setSelPlan] = useState({price: 0, title: ""});

   const onChecked = (e) => {
      setChecked(e.target.checked)
   }

   const openModal = (e, price, title) => {
      setShow(true);
      setSelPlan({price, title});
   }

   const handleAfterOpen = () => {
      connectPaypal()
   }

   const closeModal = () => {
      setShow(false);
   }

   const connectPaypal = () => {
      console.log(selPlan, "Paypal")
      paypal.Buttons({
         createOrder: function(data, actions) {
           return actions.order.create({
             purchase_units: [{
               amount: {
                 value: selPlan.price
               }
             }]
           });
         },
         onApprove: function(data, actions) {
           // Capture the funds from the transaction
           return actions.order.capture().then(function(details) {
             // Show a success message to your buyer
             alert('Transaction completed by ' + details.payer.name.given_name);
           });
         }
       }).render('#paypal-button-container');
   }

    useEffect(() => {
      console.log(paypal)
      dispatch(getPlans())
   }, [])

   

   return (
      <Grid container spacing={6}>
         <Grid item xs={12}>
            <Card>
               <CardHeader title='Overview'/>
               <CardContent>
                  <Divider className='mb-3'></Divider>
                  <Grid container spacing={5}>
                     <Grid item xs={6} className='mb-5'>
                        <Typography
                           sx={{
                           mb: 2,
                           fontWeight: 500
                        }}>
                           Name
                        </Typography>
                        <Typography
                           sx={{
                           mb: 2,
                           fontWeight: 800
                        }}>
                           Free - March 2023
                        </Typography>

                     </Grid>
                     <Grid item xs={6}>
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
                        }}>
                           Content Usage
                        </Typography>
                        <Typography
                           sx={{
                           fontWeight: 500
                        }}>
                           <b>244 words</b>
                           <span className='text-lightgrey ps-1'>
                              used of 1500 words</span>
                        </Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <BorderLinearProgress variant="determinate" value={30}/>
                     </Grid>
                     <Grid item xs={12} className='d-flex justify-content-start'>
                        <Typography
                           sx={{
                           fontWeight: 500
                        }}>
                           <li>Words generated</li>
                        </Typography>
                        <Typography
                           sx={{
                           pl: 3,
                           fontWeight: 500
                        }}>
                           <li className='ps-3'>Available words</li>
                        </Typography>
                     </Grid>
                  </Grid>
                  <Grid container spacing={5}>
                     <Grid item xs={12} className='d-flex justify-content-between'>
                        <Typography
                           sx={{
                           fontWeight: 500
                        }}>
                           Image Usage
                        </Typography>
                        <Typography
                           sx={{
                           fontWeight: 500
                        }}>
                           <b>244 images</b>
                           <span className='text-lightgrey ps-1'>
                              used of 500 images</span>
                        </Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <BorderLinearProgress variant="determinate" value={30}/>
                     </Grid>
                     <Grid item xs={12} className='d-flex justify-content-start'>
                        <Typography
                           sx={{
                           fontWeight: 500
                        }}>
                           <li>Words generated</li>
                        </Typography>
                        <Typography
                           sx={{
                           pl: 3,
                           fontWeight: 500
                        }}>
                           <li className='ps-3'>Available words</li>
                        </Typography>
                     </Grid>
                  </Grid>
               </CardContent>
            </Card>
         </Grid>
         <Grid item xs={12}>
            <Card>
               <CardHeader
                  title='Upgrade'
                  subheader='Get more words per month by upgrading today!'/>
               <CardContent>
                  <Divider className='mb-5'></Divider>
                  <Grid container spacing={5} className='pt-3 mb-5'>
                     <Grid item xs={12} className='d-flex justify-content-center'>
                        <span>Monthly</span>
                        <FormControlLabel
                           control={< IOSSwitch sx = {{ ml: 5 }}checked = {
                           checked
                        }
                        onChange = {
                           onChecked
                        } />}
                           label='Yearly'/>
                        <div
                           style={{
                           textAlign: "center",
                           width: "120px",
                           borderRadius: "10px",
                           color: "#FFFFFF",
                           backgroundColor: "rgb(29 150 255)",
                           fontSize: "12px",
                           height: "20px",
                           transform: 'translateY(-20px)'
                        }}>Save up to 10%</div>
                     </Grid>
                  </Grid>

                  <Grid container spacing={5}>
                     {!isEmpty(plans) && plans.map(data => {
                        if (!checked) {
                           return (
                              <Grid xs={12} sm={12} md={4} key={data._id} item>
                                 <Card>
                                    <CardContent className='text-center p-5'>
                                       <p>
                                          <sup>$</sup>
                                          <span className='h1 fs-1'>{data.monthly}</span>
                                          <span>/mo</span>
                                       </p>
                                       <p className='h3'>{data.title}</p>
                                       <Typography
                                          sx={{
                                          fontSize: '20px',
                                          fontWeight: 500
                                       }}>
                                          Unlock advanced features and priority support.
                                       </Typography>
                                       <ul className='unordered-list mt-3'>
                                          <li>{data.wordlimit} monthly words</li>
                                          <li>Access to all tools</li>
                                          <li>Genie editor tool</li>
                                          <li>Product support</li>
                                       </ul>
                                       <Button
                                          type='button'
                                          variant='contained'
                                          size='large'
                                          className='mt-5 mb-2'
                                          onClick={(e) => openModal(e, data.monthly, data.title)}>
                                          Update Now
                                       </Button>
                                       <Typography
                                          sx={{
                                          fontSize: '18px',
                                          fontWeight: 200
                                       }}>
                                          Unlock advanced features and priority support.
                                       </Typography>
                                    </CardContent>

                                 </Card>
                              </Grid>
                           )
                        } else {
                           return (
                              <Grid xs={12} sm={12} md={4} key={data._id} item>
                                 <Card>
                                    <CardContent className='text-center p-5'>
                                       <p>
                                          <sup>$</sup>
                                          <span className='h1 fs-1'>{data.yearly / 12}</span>
                                          <span>/mo</span>
                                       </p>
                                       <p className='h3'>{data.title}</p>
                                       <Typography
                                          sx={{
                                          fontSize: '20px',
                                          fontWeight: 500
                                       }}>
                                          Unlock advanced features and priority support.
                                       </Typography>
                                       <ul className='unordered-list mt-3'>
                                          <li>{data.wordlimit} monthly words</li>
                                          <li>Access to all tools</li>
                                          <li>Genie editor tool</li>
                                          <li>Product support</li>
                                       </ul>
                                       <Button
                                          type='button'
                                          variant='contained'
                                          size='large'
                                          className='mt-5 mb-2'
                                          onClick={(e) => openModal(e, data.monthly, data.title)}>
                                          Update Now
                                       </Button>
                                       <Typography
                                          sx={{
                                          fontSize: '18px',
                                          fontWeight: 200
                                       }}>
                                          Unlock advanced features and priority support.
                                       </Typography>
                                    </CardContent>

                                 </Card>
                              </Grid>
                           )
                        }
                     })
                  }

                  </Grid>
               </CardContent>
            </Card>
         </Grid>
         <Modal
            isOpen={show}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
            onAfterOpen={handleAfterOpen}
         >
            <div className='row'>
               <span style={{fontWeight : "bold", fontSize : "20px"}}>Choose payment method</span>
               <button type="button" className="btn-close" aria-label="Close" style={{right : "30px", position : "absolute"}} onClick={closeModal}></button>
            </div>
            <div id="paypal-button-container" className="row mt-5">
               
            </div>

         </Modal>
      </Grid>
   )
}

export default Overview
