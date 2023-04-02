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

   const closeModal = () => {
      setShow(false);
   }

   const connectPaypal = () => {
      console.log(selPlan, "Paypal")
   }

   useEffect(() => {
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
                     <Grid item xs={10} className='mb-5'>
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
                              <Grid key={data._id} item xs={4}>
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
                              <Grid key={data._id} item xs={4}>
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
               // onAfterOpen={this.afterOpenModal}
               onRequestClose={closeModal}
               style={customStyles}
               contentLabel="Example Modal"
               ariaHideApp={false}
            >
               <div className='row'>
                  <span style={{fontWeight : "bold", fontSize : "20px"}}>Choose payment method</span>
                  <button type="button" className="btn-close" aria-label="Close" style={{right : "30px", position : "absolute"}} onClick={closeModal}></button>
               </div>
               <div className="row mt-5">
                  <div className="card col col-5 bg-primary p-3 m-3 text-white disabled">
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"></path>
                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"></path>
                     </svg>

                     <span className="form-switch-promotion-container" style={{left: "5rem"}}>
                        <span className="form-switch-promotion-body">
                           <svg className="form-switch-promotion-arrow" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 99.3 57" width="48">
                           <path fill="none" stroke="#bdc5d1" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" d="M2,39.5l7.7,14.8c0.4,0.7,1.3,0.9,2,0.4L27.9,42"></path>
                           <path fill="none" stroke="#bdc5d1" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" d="M11,54.3c0,0,10.3-65.2,86.3-50"></path>
                           </svg>
                           <span className="form-switch-promotion-text">
                           <span className="badge bg-info rounded-pill ms-1">Coming soon</span>
                           </span>
                        </span>
                     </span>

                     <h5 className="mt-3 text-white">Debit/Credit Card</h5>
                     <a id="checkout-stripe" className="stretched-link"></a>
                  </div>

                  <div className="card col col-5 p-3 m-3 text-primary" style={{backgroundColor: "#ffc439"}} onClick={connectPaypal}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-paypal" viewBox="0 0 16 16">
                        <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z"></path>
                     </svg>

                     <h5 className="mt-3 text-primary">PayPal</h5>
                     <a id="checkout-paypal" className="stretched-link btn"></a>
                  </div>
               </div>

            </Modal>
      </Grid>
   )
}

export default Overview
