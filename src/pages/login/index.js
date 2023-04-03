import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react'

import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Icon from 'src/@core/components/icon'
import ButtonGroup from '@mui/material/ButtonGroup';

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// react component
import Carousel from 'better-react-carousel'

import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'
import { PUBLIC_URL } from 'src/configs'
import { LoadingButton } from '@mui/lab';

import themeConfig from 'src/configs/themeConfig'

import BlankLayout from 'src/@core/layouts/BlankLayout'
import { Grid } from '@mui/material'
import Modal from 'react-modal';

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import {particle_options} from 'src/configs';

const LinkStyled = styled(Link)(({ theme }) => ({ fontSize: '0.875rem', textDecoration: 'none', color: theme.palette.primary.main }))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
   '& .MuiFormControlLabel-label': {
      fontSize: '0.875rem',
      color: theme.palette.text.secondary
   }
}))

const schema = yup
   .object()
   .shape({
      email: yup
         .string()
         .email()
         .required(),
      password: yup
         .string()
         .min(5)
         .required()
   })

const defaultValues = {
   password: 'admin',
   email: 'admin@vuexy.com'
}

const styles = css`
   .ml-10 {
      margin-left: 10px;
   }
`

const customStyles = {
   content : {
     top                   : '50%',
     left                  : '50%',
     right                 : 'auto',
     bottom                : 'auto',
     marginRight           : '-50%',
     transform             : 'translate(-50%, -50%)',
     borderRadius : "20px",
     width : "500px",
     position : "relative"
   },
   overlay : {
      zIndex : "99999",
      backgroundColor : "rgba(0,0,0, 0.5)"
   }
 };

const LoginPage = () => {
   const [rememberMe, setRememberMe] = useState(true)
   const [showPassword, setShowPassword] = useState(false)
   const [backtop, setBacktop] = useState('')
   const [fixed, setFixed] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   
   const auth = useAuth()
   const theme = useTheme()
   const bgColors = useBgColor()
   const { settings } = useSettings()
   const hidden = useMediaQuery(theme.breakpoints.down('md'))

   const { skin } = settings

   const { control, setError, handleSubmit, formState: {
      errors
   } } = useForm({ defaultValues, mode: 'onBlur', resolver: yupResolver(schema) })

   const onSubmit = data => {
      const { email, password } = data
      setIsLoading(true)
      auth.login({
         email,
         password,
         rememberMe
      }, () => {
         setIsLoading(false)
         setError('email', {
            type: 'manual',
            message: 'Email or Password is invalid'
         })
      }, () => {
         setIsLoading(false)
      })
   }

   const MyDot = ({ isActive }) => (
      <span
         style={{
            display: 'inline-block',
            height: isActive ? '8px' : '5px',
            width: isActive ? '25px' : '5px',
            background: 'rgb(188 58 255)',
            borderRadius: '10px',
            
         }}
      ></span>
   )

   const particlesInit = useCallback(async engine => {
      await loadFull(engine);
   }, []);

   const particlesLoaded = useCallback(async container => {
         await console.log(container);
   }, []);

   const [show, setShow] = useState(false);

   const onChecked = (e) => {
      setChecked(e.target.checked)
   }

   const openModal = (e) => {
      setShow(true);
   }

   const closeModal = () => {
      setShow(false);
   }

   useEffect(() => {
      if (typeof window != undefined) {
         window.onscroll = ev => {
            if (window.pageYOffset > 300) {
               setBacktop('show')
               setFixed('navbar-stuck')
            } else {
               setBacktop('hide')
            }
         }
      }
   }, [])

   const [isLoading, setIsLoading] = useState (false)
   
   return (
      <React.Fragment>
         <header className={`header navbar navbar-expand-lg navbar-sticky ${fixed}`} style={{ zIndex: 5, boxShadow: "#99999982 -1px 3px 9px 2px" }}>
            <div className='container'>
               <Link href='#' className='navbar-brand'>
                  <img src='/images/lucass-logo.png' width='200' alt='Silicon' />
               </Link>
               <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarCollapse1'
                  aria-expanded='false'>
                  <span className='navbar-toggler-icon'></span>
               </button>
               <nav id='navbarCollapse1' className='collapse navbar-collapse ms-3'>
                  <hr className='d-lg-none mt-3 mb-2' />
                  <ul className='navbar-nav me-auto'>
                     <li className='nav-item'>
                        <Link href='/login' className='nav-link active'>
                           Home
                        </Link>
                     </li>
                     <li className='nav-item dropdown'>
                        <Link
                           href='/dashboards/library'
                           className='nav-link dropdown-toggle'
                           data-bs-toggle='dropdown'
                           data-bs-auto-close='outside'
                           aria-expanded='false'>
                           TooLs
                        </Link>
                        <ul className='dropdown-menu dropdown'>
                           <li className='nav-item dropdown'>
                              <Link
                                 href='/tools/blog-tools/blog-ideas'
                                 className='nav-link dropdown-toggle'
                                 data-bs-toggle='dropdown'
                                 data-bs-auto-close='outside'
                                 aria-expanded='false'>
                                 Blog tools
                              </Link>
                              <ul className='dropdown-menu'>
                                 <li>
                                    <Link href='/tools/blog-tools/blog-ideas' className='dropdown-item'>
                                       Blog ideas
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/blog-tools/blog-intro' className='dropdown-item'>
                                       Blog intro
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/blog-tools/keyword-generator' className='dropdown-item'>
                                    Keyword generator
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/blog-tools/test-adir' className='dropdown-item'>
                                    Test Adir
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/blog-tools/full-article-writing' className='dropdown-item'>
                                    Full article writing
                                    </Link>
                                 </li>

                              </ul>
                           </li>
                           <li className='nav-item dropdown'>
                              <Link
                                 href='/tools/eCommerce/product-description'
                                 className='nav-link dropdown-toggle'
                                 data-bs-toggle='dropdown'
                                 data-bs-auto-close='outside'
                                 aria-expanded='false'>
                                 E-commerce
                              </Link>
                              <ul className='dropdown-menu'>
                                 <li>
                                    <Link href='/tools/eCommerce/product-description' className='dropdown-item'>
                                    Product description
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/eCommerce/short-text-hook' className='dropdown-item'>
                                    Short text hook
                                    </Link>
                                 </li>
                              </ul>
                           </li>
                           <li className='nav-item dropdown'>
                              <Link
                                 href='/tools/social-media-tools/youTube-video-ideas'
                                 className='nav-link dropdown-toggle'
                                 data-bs-toggle='dropdown'
                                 data-bs-auto-close='outside'
                                 aria-expanded='false'>
                                 Social media tools
                              </Link>
                              <ul className='dropdown-menu'>
                                 <li>
                                    <Link href='/tools/social-media-tools/youTube-video-ideas' className='dropdown-item'>
                                    YouTube video ideas
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/social-media-tools/instagram-captions' className='dropdown-item'>
                                    Instagram captions
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/social-media-tools/hashtag-generator' className='dropdown-item'>
                                    Hashtag generator
                                    </Link>
                                 </li>
                              </ul>
                           </li>
                           <li className='nav-item dropdown'>
                              <Link
                                 href='/tools/digital-ad-copy/ad-copy-variants'
                                 className='nav-link dropdown-toggle'
                                 data-bs-toggle='dropdown'
                                 data-bs-auto-close='outside'
                                 aria-expanded='false'>
                                 Digital Ad copy
                              </Link>
                              <ul className='dropdown-menu'>
                                 <li>
                                    <Link href='/tools/digital-ad-copy/ad-copy-variants' className='dropdown-item'>
                                    Ad copy variants
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/digital-ad-copy/general-ad-copy' className='dropdown-item'>
                                    General Ad copy
                                    </Link>
                                 </li>
                              </ul>
                           </li>
                           <li className='nav-item dropdown'>
                              <Link
                                 href='/tools/brainstorming-tools/name-generator'
                                 className='nav-link dropdown-toggle'
                                 data-bs-toggle='dropdown'
                                 data-bs-auto-close='outside'
                                 aria-expanded='false'>
                                 Brainstorming tools
                              </Link>
                              <ul className='dropdown-menu'>
                                 <li>
                                    <Link href='/tools/brainstorming-tools/name-generator' className='dropdown-item'>
                                    Name generator
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/brainstorming-tools/startup-ideas' className='dropdown-item'>
                                    Startup ideas
                                    </Link>
                                 </li>
                              </ul>
                           </li>
                           <li className='nav-item dropdown'>
                              <Link
                                 href='/tools/personal-tools/love-letter'
                                 className='nav-link dropdown-toggle'
                                 data-bs-toggle='dropdown'
                                 data-bs-auto-close='outside'
                                 aria-expanded='false'>
                                 Personal tools
                              </Link>
                              <ul className='dropdown-menu'>
                                 <li>
                                    <Link href='/tools/personal-tools/love-letter' className='dropdown-item'>
                                    Love letter
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/personal-tools/cover-letter' className='dropdown-item'>
                                    Cover letter
                                    </Link>
                                 </li>
                              </ul>
                           </li>
                           <li className='nav-item dropdown'>
                              <Link
                                 href='/tools/images/oil-painting'
                                 className='nav-link dropdown-toggle'
                                 data-bs-toggle='dropdown'
                                 data-bs-auto-close='outside'
                                 aria-expanded='false'>
                                 Images
                              </Link>
                              <ul className='dropdown-menu'>
                                 <li>
                                    <Link href='/tools/images/oil-painting' className='dropdown-item'>
                                    Oil painting
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/images/watercolor' className='dropdown-item'>
                                    Watercolor
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/images/sketch' className='dropdown-item'>
                                    Sketch
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/images/pop-art' className='dropdown-item'>
                                    Pop art
                                    </Link>
                                 </li>
               
                              </ul>
                           </li>
                        </ul>
                     </li>
                     <li className='nav-item dropdown'>
                              <Link
                                 href='/tools/images/oil-painting'
                                 className='nav-link dropdown-toggle'
                                 data-bs-toggle='dropdown'
                                 data-bs-auto-close='outside'
                                 aria-expanded='false'>
                                 Use Cases
                              </Link>
                              <ul className='dropdown-menu'>
                                 <li>
                                    <Link href='/tools/blog-tools/blog-ideas' className='dropdown-item'>
                                    Blog tools
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/eCommerce/product-description' className='dropdown-item'>
                                    E-commerce
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/social-media-tools/youTube-video-ideas' className='dropdown-item'>
                                    Social media tools
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/digital-ad-copy/ad-copy-variants' className='dropdown-item'>
                                    Digital AD copy
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/brainstorming-tools/name-generator' className='dropdown-item'>
                                    Brainstorming tools
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/personal-tools/love-letter' className='dropdown-item'>
                                    Personal tools
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/tools/images/oil-painting' className='dropdown-item'>
                                    Images
                                    </Link>
                                 </li>

                                 
               
                              </ul>
                           </li>
                  </ul>
                  <button
                     type='button'
                     className='btn btn-primary ml-10'
                     onClick={openModal}
                  >
                     Sign In
                  </button>
               </nav>
            </div>
         </header>

         <section id='slider'>
            <div className='container'>
               <Grid container spacing={2}>
                  <Grid item xs={12} md={5} lg={5} xl={5}>
                     <p className='animated shake text-pop-up-top' style={{fontSize : "60px", fontWeight:"bold", color:"#FFFFFF", marginTop:"120px"}}>Write Better, Write Faster with Lucass</p>
                     <p style={{fontSize:"18px"}}>Unlock endless creativity and make your writing dreams a reality with our cutting-edge AI technology. Say goodbye to writer's block and hello to endless inspiration.</p>
                     <Button type='submit' variant='contained' size='large' className='mt-4'>
                        Get started for free
                     </Button>
                     <p style={{fontWeight : "bold", marginTop:"100px"}}>Largest companies use our tool to work efficiently</p>
                     <div className='d-flex justify-content-between'>
                        <img src='/images/02.svg' width={135} alt='logo'/>
                        <img src='/images/04.svg' width={135} alt='logo'/>
                        <img src='/images/05.svg' width={135} alt='logo'/>
                        <img src='/images/07.svg' width={135} alt='logo'/>
                     </div>
                  </Grid>
                  <Grid item xs={12} md={7} lg={7} xl={5}>
                     <div style={{zIndex : 2, transform: "translate3d(-10.6px, 10.2px, 0px)",transformStyle: "preserve-3d",backfaceVisibility: "hidden"}}>
                        {  
                           hidden ? 
                              <img src='/images/layer011.png'  width={"100%"} alt='layer' />
                           :
                              <img src='/images/layer011.png'  height={"100%"} alt='layer' />
                        }
                     </div>
                  </Grid>
               </Grid>
               <Particles
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={particle_options}
               />
            </div>
         </section>
         
         <section id='organize'>
            <div className='container' style={{marginTop:"50px"}}>
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <h1 className='text-center'>What we do?</h1>
                     <p className='text-center'>AI-powered productivity tool for all your creative needs.</p>
                  </Grid>
               </Grid>
               <Grid container spacing={2} className='mt-3'>
                  <Grid item xs={12} md={4} lg={4} xl={4} style={{display :'flex', flexDirection:"column", justifyContent:"center", alignItems:'center'}}>
                     <div style={{padding:"20px", borderRadius:"50px", backgroundColor:"#f3f6ff", width:"70px"}}>
                        <img src="/images/seeds-abs028.png" width="50" alt="Icon" />
                     </div>
                     <h4 className='mt-3'>Intelligent Content Generation</h4>
                     <p className='text-center'>Automatically generate high-quality blog posts, articles, and more with AI.</p>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4} xl={4} style={{display :'flex', flexDirection:"column", justifyContent:"center", alignItems:'center'}}>
                     <div style={{padding:"20px", borderRadius:"50px", backgroundColor:"#f3f6ff", width:"70px"}}>
                        <img src="/images/seeds-fil024.png" width="50" alt="Icon" />
                     </div>
                     <h4 className='mt-3'>Customizable Output</h4>
                     <p className='text-center'>Fine-tune the tone, style, and format of your content to suit your brand's needs.</p>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4} xl={4} style={{display :'flex', flexDirection:"column", justifyContent:"center", alignItems:'center'}}>
                     <div style={{padding:"20px", borderRadius:"50px", backgroundColor:"#f3f6ff", width:"70px"}}>
                        <img src="/images/seeds-abs050.png" width="50" alt="Icon" />
                     </div>
                     <h4 className='mt-3'>In-Depth Analytics</h4>
                     <p className='text-center'>Track performance of your content and see topics resonating with your audience.</p>
                  </Grid>
               </Grid>
            </div>
         </section>

         <section id='manage'>
            <div className='container' style={{marginTop:"100px"}}>
               <Grid container spacing={5} >
                  <Grid item xs={12} md={7} lg={7} xl={7}>
                     <img src='/images/new_slider1.jpg' width='100%' alt='manage' style={{boxShadow : "#000 0 0 5px"}} />
                  </Grid>
                  <Grid item xs={12} md={5} lg={5} xl={5} display='flex' justifyContent='end' alignItems='center'>
                     <div style={{width :"100%"}}>
                        <p className='h3'>Generating creative images.</p>
                        <ul className="list-unstyled pb-2">
                           <li className="d-flex align-items-center pb-1 mb-2">
                              <i className="bx bx-check-circle text-primary fs-xl me-2"></i>
                              Powerful image generation
                           </li>
                           <li className="d-flex align-items-center pb-1 mb-2">
                              <i className="bx bx-check-circle text-primary fs-xl me-2"></i>
                              Members-only content added monthly
                           </li>
                           <li className="d-flex align-items-center pb-1 mb-2">
                              <i className="bx bx-check-circle text-primary fs-xl me-2"></i>
                              Find the image what you want very quickly
                           </li>
                           <li className="d-flex align-items-center pb-1 mb-2">
                              <i className="bx bx-check-circle text-primary fs-xl me-2"></i>
                              Unlimited royalty-free downloads
                           </li>
                           <li className="d-flex align-items-center pb-1 mb-2">
                              <i className="bx bx-check-circle text-primary fs-xl me-2"></i>
                              Enhanced legal protections

                           </li>
                        </ul>
                        <Button type='submit' variant='contained' size='large' className='mt-2'>
                           Find more
                           <i className='bx bx-right-arrow ps-2'></i>
                        </Button>
                     </div>
                     
                  </Grid>
               </Grid>
            </div>
            
         </section>

         <section id='oneTool'>
            <div className='container'>
               <Grid container spacing={0}>
                  <Grid item xs={12} >
                     <p className='h1' style={{textAlign:"center", fontWeight:"bold", color:"#000000", marginTop:"120px"}}>Comprehensive suite of tools</p>
                  </Grid>
               </Grid>
               <Grid container spacing={2} >
                  <Grid item xs={12} md={6} lg={3} xl={3}>
                     <Button type='submit' fullWidth variant='contained' size='medium' className='mt-4 me-2' style={{borderRadius:"5px"}}>
                        <i className='bx bxs-star'></i>
                        Project Management
                     </Button>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3} xl={3}>
                     <Button type='submit' fullWidth variant='contained' size='medium' className='mt-4 me-2' style={{borderRadius:"5px"}}>
                        <i className='bx bxs-star'></i>
                        seamless collaboration
                     </Button>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3} xl={3}>
                     <Button type='submit' fullWidth variant='contained' size='medium' className='mt-4 me-2' style={{borderRadius:"5px"}}>
                        <i className='bx bxs-star'></i>
                        easy navigation
                     </Button>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3} xl={3}>
                     <Button type='submit' fullWidth variant='contained' size='medium' className='mt-4 me-2' style={{borderRadius:"5px"}}>
                        <i className='bx bxs-star'></i>
                        Campaign Planning
                     </Button>
                  </Grid>
               </Grid>
               <Grid container style={{backgroundColor:"#f3f6ff",marginTop:"60px"}}>
                  <Grid container item xs={12} md={6} lg={6} xl={6} display='flex' direction='column' justifyContent='center' alignItems='start'>
                     <p className='h3 mb-4'>Explore your possibilities</p>
                     <p>Unlock the full potential of your projects with our comprehensive suite of tools designed for seamless collaboration and easy navigation.</p>
                     <p>It will helps you to explore your possibilities.</p>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6} xl={6}>
                     <img src="/images/landing/saas-1/use-cases/01.png" className="d-block my-lg-2 mx-auto me-md-0" width="100%" alt="Image" />
                  </Grid>
               </Grid>
               
            </div>
         </section>
         
         <section id='desktop1'>
            <div className='container mt-5'>
               <Grid container spacing={2}>
                  <Grid item xs={12} md={12} lg={6} xl={6}>
                     <div
                        className='dark-mode card h-100 zi-1'
                        style={{
                           backgroundColor: 'rgb(0,0,0)',
                           color : "#FFFFFF"
                        }}>
                        <div className='card-header text-start'>
                           <h1 className='card-title mt-5'>200+</h1>
                           <span className='h4 card-text text-light'>Clients Already Served</span>

                           <div
                              className='d-flex flex-wrap justify-content-start mt-5 p-2 mb-5'
                              style={{
                                 backgroundColor: 'rgb(50,50,100)',
                                 width: '70%',
                                 borderRadius: '10px'
                              }}>
                              <div className='col-6 text-start d-flex align-items-center'>
                                 <span
                                    style={{
                                       fontSize: '12px'
                                    }}>
                                    REVIEWED ON
                                 </span>
                              </div>
                              <div className='col-6 d-flex align-items-center'>
                                 <span
                                    style={{
                                       fontSize: '12px'
                                    }}>
                                    REVIEWED ON
                                 </span>
                              </div>
                              <div className='col-6 d-flex align-items-center'>
                                 <span className='h4 mb-0'>Clutch</span>
                              </div>
                              <div className='col-6 d-flex align-items-center'>
                                 <span
                                    style={{
                                       fontSize: '12px'
                                    }}>
                                    REVIEWED ON
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6} xl={6} className='bg-white'>
                     <Carousel
                        cols={1}
                        rows={1}
                        gap={30}
                        loop
                        autoplay={2000}
                        showDots
                        dot={MyDot}
                        arrowLeft={<button type="button" id="case-study-prev" className="btn btn-prev btn-icon btn-sm bg-white ms-5 mb-2" tabIndex="0" aria-label="Prev slide" style={{ position: 'absolute', right: '150px', top: '50px', zIndex: 3 }}>
                           <i className="bx bx-chevron-left"></i>
                        </button>}
                        arrowRight={<button type="button" id="case-study-next" className="btn btn-next btn-icon btn-sm bg-white mb-2" tabIndex="1" aria-label="Next slide" style={{ position: 'absolute', marginLeft: '100px', right: '100px', top: '50px' }}>
                           <i className="bx bx-chevron-right"></i>
                        </button>}
                        
                     >
                        <Carousel.Item>
                           <div className='text-start' >
                              <Grid cols={1}>
                                 <Card>
                                    <CardContent style={{ padding: "45px" }}>
                                       <button className='btn btn-primary p-2'>
                                          <i className='bx bxs-quote-alt-left fs-5'></i>
                                       </button>

                                       <p className='pb-2 pb-lg-3 mb-3 mt-3'>
                                          Which Food is Best for Your Pet: Dry or Wet?
                                          When it comes to feeding your pet, you want to make sure you're giving them the best nutrition possible. But with so many options out there, it can be hard to decide which type of food is best for your pet. Should you go with dry food or wet food?
                                          In this blog post, we'll explore the differences between dry and wet food, and provide some tips on how to choose the right food for your pet.
                                       </p>
                                       <div className='d-flex flex-wrap justify-content-start mt-3 p-2 mb-2'>
                                          <div className='text-start d-flex align-items-center' style={{width : "60px"}}>
                                             <div
                                                style={{
                                                   width: '50px',
                                                   height: '50px',
                                                   borderRadius: '50%',
                                                   overflow: 'hidden'
                                                }}>
                                                <img src={`${PUBLIC_URL}` + 'images/avatar/01.jpg'} width='50px' height='50px' alt='text1'/>
                                             </div>
                                          </div>
                                          <div className='col-10'>
                                             <span className='h5'>Christina</span>
                                             <br />
                                             <span>Head of Marketing at Lorem Company</span>
                                          </div>
                                       </div>
                                    </CardContent>

                                 </Card>
                              </Grid>
                           </div>
                        </Carousel.Item>
                        <Carousel.Item>
                           <div className='text-start ' >
                              <Grid cols={1}>
                                 <Card>
                                    <CardContent style={{ padding: "45px" }}>
                                       <button className='btn btn-primary p-2'>
                                          <i className='bx bxs-quote-alt-left fs-5'></i>
                                       </button>

                                       <p className='pb-2 pb-lg-3 mb-3 mt-3'>
                                          Which Food is Best for Your Pet: Dry or Wet?
                                          When it comes to feeding your pet, you want to make sure you're giving them the best nutrition possible. But with so many options out there, it can be hard to decide which type of food is best for your pet. Should you go with dry food or wet food?
                                          In this blog post, we'll explore the differences between dry and wet food, and provide some tips on how to choose the right food for your pet.
                                       </p>
                                       <div className='d-flex flex-wrap justify-content-start mt-3 p-2 mb-2'>
                                          <div className='text-start d-flex align-items-center' style={{width : "60px"}}>
                                             <div
                                                style={{
                                                   width: '50px',
                                                   height: '50px',
                                                   borderRadius: '50%',
                                                   overflow: 'hidden'
                                                }}>
                                                <img src={`${PUBLIC_URL}` + 'images/avatar/01.jpg'} width='50px' height='50px' alt='text1' />
                                             </div>
                                          </div>
                                          <div className='col-10'>
                                             <span className='h5'>Christina</span>
                                             <br />
                                             <span>Head of Marketing at Lorem Company</span>
                                          </div>
                                       </div>
                                    </CardContent>

                                 </Card>
                              </Grid>
                           </div>
                        </Carousel.Item>
                        <Carousel.Item>
                           <div className='text-start ' >
                              <Grid cols={1}>
                                 <Card>
                                    <CardContent style={{ padding: "45px" }}>
                                       <button className='btn btn-primary p-2'>
                                          <i className='bx bxs-quote-alt-left fs-5'></i>
                                       </button>

                                       <p className='pb-2 pb-lg-3 mb-3 mt-3'>
                                          Which Food is Best for Your Pet: Dry or Wet?
                                          When it comes to feeding your pet, you want to make sure you're giving them the best nutrition possible. But with so many options out there, it can be hard to decide which type of food is best for your pet. Should you go with dry food or wet food?
                                          In this blog post, we'll explore the differences between dry and wet food, and provide some tips on how to choose the right food for your pet.
                                       </p>
                                       <div className='d-flex flex-wrap justify-content-start mt-3 p-2 mb-2'>
                                          <div className='text-start d-flex align-items-center' style={{width : "60px"}}>
                                             <div
                                                style={{
                                                   width: '50px',
                                                   height: '50px',
                                                   borderRadius: '50%',
                                                   overflow: 'hidden'
                                                }}>
                                                <img src={`${PUBLIC_URL}` + 'images/avatar/01.jpg'} width='50px' height='50px' alt='text1' />
                                             </div>
                                          </div>
                                          <div className='col-10'>
                                             <span className='h5'>Christina</span>
                                             <br />
                                             <span>Head of Marketing at Lorem Company</span>
                                          </div>
                                       </div>
                                    </CardContent>

                                 </Card>
                              </Grid>
                           </div>
                        </Carousel.Item>
                     </Carousel>
                  </Grid>
               </Grid>
            </div>
         </section>

         <section id='tools'>
            <div className='container'>
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <p className='h1' style={{textAlign:"center", fontWeight:"bold", color:"#000000", marginTop:"100px"}}>Integrate Top Work Tools</p>
                     <p className='text-center' style={{fontSize : "20px"}}>
                        Lucass has truly been a game-changer for our business. Their advanced technology and seamless integration have made it easier for us to accomplish our daily tasks.
                     </p>
                  </Grid>
               </Grid>
            </div>
         </section>

         <section id='subscribe'>
            <div className='container'>
               <Grid container spacing={2} style={{backgroundColor:"#000000", borderRadius:"10px", marginTop:"30px", paddingBottom:"50px"}}>
                  <Grid container item xs={12} display='flex' direction='column' justifyContent='center' alignItems='center'>
                     <p className='h1' style={{textAlign:"center", fontWeight:"bold", color:"#FFFFFF", marginTop:"60px"}}>One Tool — Endless Use Cases</p>
                     <p style={{textAlign:"center", fontSize: '20px', color:"#DDDDDD"}}>Organize your tasks with a 14-day free trial</p>
                     <ButtonGroup className='mb-2' variant="contained" aria-label="outlined primary button group">
                        <TextField placeholder='Your Email' id="fullWidth" variant='outlined' style={{width : "300px", backgroundColor:"#FFFFFF"}}/>
                        <Button variant='contained'>Get started for free</Button>
                     </ButtonGroup>
                     <p style={{textAlign:"center", fontSize: '16px', color:"#DDDDDD"}}>No subscriptions. No annual fees. No lock-ins.</p>
                  </Grid>
               </Grid>
            </div>
         </section>

         <Link href='#top' className={`btn-scroll-top ${backtop}`} data-scroll>
            <span className='btn-scroll-top-tooltip text-muted fs-sm me-2'>Top</span>
            <i className='btn-scroll-top-icon bx bx-chevron-up'></i>
         </Link>


         <Modal
            isOpen={show}
            style={customStyles}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            ariaHideApp={false}
         >
           
            <div className='modal-header'>
               <ul className='nav nav-tabs mb-0' role='tablist'>
                  <li className='nav-item fs-sm mb-0'>
                     <Link
                        className='nav-link active'
                        href='#signIn'
                        data-bs-toggle='tab'
                        role='tab'
                        aria-selected='true'>
                        <i className='bx bx-lock-open fs-base me-2'></i>
                        Sign in
                     </Link>
                  </li>
                  <li className='nav-item fs-sm mb-0'>
                     <Link
                        className='nav-link'
                        href='#signup'
                        data-bs-toggle='tab'
                        role='tab'
                        aria-selected='false'>
                        <i className='bx bx-user fs-base me-2'></i>
                        Sign up
                     </Link>
                  </li>
               </ul>
               <button
                  className='btn-close'
                  type='button'
                  onClick={closeModal}
               ></button>
            </div>

            <div className='modal-body tab-content py-4'>
               <form className='tab-pane fade active show' id="signIn" noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                  <FormControl
                     fullWidth
                     sx={{
                        mb: 4
                     }}>
                     <Controller
                        name='email'
                        control={control}
                        rules={{
                           required: true
                        }}
                        render={({
                           field: {
                              value,
                              onChange,
                              onBlur
                           }
                        }) => (<TextField
                           autoFocus
                           label='Email'
                           value={value}
                           onBlur={onBlur}
                           onChange={onChange}
                           error={Boolean(errors.email)}
                           placeholder='admin@vuexy.com' />)} />{' '} {errors.email && (
                              <FormHelperText
                                 sx={{
                                    color: 'error.main'
                                 }}>
                                 {errors.email.message}
                              </FormHelperText>
                           )}
                  </FormControl>
                  <FormControl
                     fullWidth
                     sx={{
                        mb: 1.5
                     }}>
                     <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                        Password
                     </InputLabel>
                     <Controller
                        name='password'
                        control={control}
                        rules={{
                           required: true
                        }}
                        render={({
                           field: {
                              value,
                              onChange,
                              onBlur
                           }
                        }) => (
                           <OutlinedInput
                              value={value}
                              onBlur={onBlur}
                              label='Password'
                              onChange={onChange}
                              id='auth-login-v2-password'
                              error={Boolean(errors.password)}
                              type={showPassword
                                 ? 'text'
                                 : 'password'}
                              endAdornment={< InputAdornment position='end' > {
                                 ' '
                              } < IconButton edge='end' onMouseDown={
                                 e => e.preventDefault()
                              }
                                 onClick={
                                    () => setShowPassword(!showPassword)
                                 } > {
                                       ' '
                                    } < Icon icon={
                                       showPassword
                                          ? 'tabler:eye'
                                          : 'tabler:eye-off'
                                    }
                                       fontSize={
                                          20
                                       } /> {
                                       ' '
                                    } </IconButton>{' '} </InputAdornment >} />
                        )} />{' '} {errors.password && (
                           <FormHelperText
                              sx={{
                                 color: 'error.main'
                              }}
                              id=''>
                              {errors.password.message}
                           </FormHelperText>
                        )}
                  </FormControl>
                  <Box
                     sx={{
                        mb: 1.75,
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                     }}>
                     <FormControlLabel
                        label='Remember Me'
                        control={< Checkbox checked={
                           rememberMe
                        }
                           onChange={
                              e => setRememberMe(e.target.checked)
                           } />} />
                     <LinkStyled href='/forgot-password'>Forgot Password?</LinkStyled>
                  </Box>
                  <LoadingButton
                     fullWidth
                     size='large'
                     type='submit'
                     variant='contained'
                     sx={{
                        mb: 4
                     }}
                     loading={isLoading}
                  >
                     Login
                  </LoadingButton>
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                     }}>
                     <Typography
                        sx={{
                           color: 'text.secondary',
                           mr: 2
                        }}>
                        New on our platform?
                     </Typography>
                     <Typography variant='body2'>
                        <LinkStyled
                           href='/register'
                           sx={{
                              fontSize: '1rem'
                           }}>
                           Create an account
                        </LinkStyled>
                     </Typography>
                  </Box>
                  <Divider
                     sx={{
                        fontSize: '0.875rem',
                        color: 'text.disabled',
                        '& .MuiDivider-wrapper': {
                           px: 6
                        },
                        my: theme => `${theme.spacing(6)} !important`
                     }}>
                     or
                  </Divider>
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                     }}>
                     <IconButton
                        href='/'
                        component={Link}
                        sx={{
                           color: '#497ce2'
                        }}
                        onClick={e => e.preventDefault()}>
                        <Icon icon='mdi:facebook' />
                     </IconButton>
                     <IconButton
                        href='/'
                        component={Link}
                        sx={{
                           color: '#1da1f2'
                        }}
                        onClick={e => e.preventDefault()}>
                        <Icon icon='mdi:twitter' />
                     </IconButton>
                     <IconButton
                        href='/'
                        component={Link}
                        onClick={e => e.preventDefault()}
                        sx={{
                           color: theme => (theme.palette.mode === 'light'
                              ? '#272727'
                              : 'grey.300')
                        }}>
                        <Icon icon='mdi:github' />
                     </IconButton>
                     <IconButton
                        href='/'
                        component={Link}
                        sx={{
                           color: '#db4437'
                        }}
                        onClick={e => e.preventDefault()}>
                        <Icon icon='mdi:google' />
                     </IconButton>
                  </Box>
               </form>

               <form className='tab-pane fade' autoComplete='off' id='signup'>
                  <div className='mb-3'>
                     <label className='form-label' htmlFor='name'>
                        Full name
                     </label>
                     <input className='form-control' type='text' id='name' placeholder='John Doe' />
                  </div>
                  <div className='mb-3'>
                     <label className='form-label' htmlFor='email2'>
                        Email address
                     </label>
                     <input
                        className='form-control'
                        type='email'
                        id='email2'
                        placeholder='johndoe@example.com' />
                  </div>
                  <div className='mb-3'>
                     <label className='form-label' htmlFor='pass2'>
                        Password
                     </label>
                     <div className='password-toggle'>
                        <input className='form-control' type='password' id='pass2' />
                        <label className='password-toggle-btn'>
                           <input className='password-toggle-check' type='checkbox' />
                           <span className='password-toggle-indicator'></span>
                        </label>
                     </div>
                  </div>
                  <div className='mb-4'>
                     <label className='form-label' htmlFor='pass3'>
                        Confirm password
                     </label>
                     <div className='password-toggle'>
                        <input className='form-control' type='password' id='pass3' />
                        <label className='password-toggle-btn'>
                           <input className='password-toggle-check' type='checkbox' />
                           <span className='password-toggle-indicator'></span>
                        </label>
                     </div>
                  </div>
                  <button className='btn btn-primary d-block' type='submit'>
                     Sign up
                  </button>
               </form>
            </div>
         </Modal>


         
         <footer className='footer border-top pt-3 pb-4 pb-lg-5 mt-5'>
            <div className='container pt-2 pt-md-4 pt-lg-5 pb-xl-3'>
               <div className='row d-flex justify-content-between'>
                  <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                     <img
                        className='mb-4'
                        src={'/images/lucass-logo.png'}
                        width={'200px'} 
                        alt='text1'/>
                     <ul className='list-unstyled'>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>
                              <i className='bx bx-phone me-1'></i>
                              153 Williamson Plaza, Maggieberg
                           </Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>
                              <i className='bx bx-phone me-1'></i>
                              +1 (062) 109-9222
                           </Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>
                              <i className='bx bx-mail-send me-1'></i>
                              support@lucass.com
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className='col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2'>
                     <p className='h5 pb-3'>Features</p>
                     <ul className='list-unstyled'>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Dashboard</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Pricing</Link>
                        </li>
                     </ul>
                  </div>
                  <div className='col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2'>
                     <p className='h5 pb-3'>E-Commerce</p>
                     <ul className='list-unstyled'>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Blog tools</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>E-Commerce</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Social media tools</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Digital Ad copy</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Brainstorming tools</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Personal tools</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Images</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Video Script Generator</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Writing Tools</Link>
                        </li>
                     </ul>
                  </div>
                  <div className='col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2'>
                     <p className='h5 pb-3'>Tools</p>
                     <ul className='list-unstyled'>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Blog ideas</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Blog intro</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Keyword generator</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Product description</Link>
                        </li>
                     </ul>
                  </div>
                  <div className='col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2'>
                     <p className='h5 pb-3'>Resources</p>
                     <ul className='list-unstyled'>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Your Account</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Lucass Editor</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Get started</Link>
                        </li>
                        <li>
                           <Link href="#" className='link-sm link-secondary1'>Sign in</Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </footer>
         <footer className='footer  pt-3 pb-4 pb-lg-5'>
            <div className='container border-top pt-2 pt-md-4 pt-lg-5 pb-xl-3'>
               <div className='row d-flex justify-content-center'>
                  <p className='text-center'>© Lucass 2023. All rights reserved.</p>
                  <p className='text-center'>
                     When you visit or interact with our sites, services or tools, we or our
                     authorised service providers may use cookies for storing information to help
                     provide you with a better, faster and safer experience and for marketing
                     purposes.
                  </p>
               </div>
            </div>
         </footer>
      </React.Fragment>
   )
}

LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginPage
