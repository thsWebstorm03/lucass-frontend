/** @jsxImportSource @emotion/react */

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

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import { Grid } from '@mui/material'

// ** Styled Components

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

const LoginPage = () => {
   const [rememberMe, setRememberMe] = useState(true)
   const [showPassword, setShowPassword] = useState(false)
   const [backtop, setBacktop] = useState('')
   const [fixed, setFixed] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [show, setShow] = useState('')

   // ** Hooks
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
            marginTop: '-20px',
         }}
      ></span>
   )
   useEffect(() => {
      if (typeof window != undefined) {
         window.onscroll = ev => {
            if (window.pageYOffset > 300) {
               setBacktop('show')
               setFixed('navbar-stuck')
            } else {
               setBacktop('')
               setFixed('')
            }
         }
      }
   }, [])

   const [isLoading, setIsLoading] = useState (false)
   
   return (
      <React.Fragment>
         <header className={`header navbar navbar-expand-lg navbar-sticky ${fixed}`} style={{ zIndex: 5, boxShadow: "#99999982 -1px 3px 9px 2px" }}>
            <div className='container'>
               <a href='#' className='navbar-brand'>
                  <img src='/images/logos/seeds-logo.png' width='150' alt='Silicon' />
               </a>
               <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarCollapse1'
                  aria-expanded='false'>
                  <span className='navbar-toggler-icon'></span>
               </button>
               <nav id='navbarCollapse1' className='collapse navbar-collapse'>
                  <hr className='d-lg-none mt-3 mb-2' />
                  <ul className='navbar-nav me-auto'>
                     <li className='nav-item'>
                        <a href='#' className='nav-link active'>
                           Home
                        </a>
                     </li>
                     <li className='nav-item dropdown'>
                        <a
                           href='#'
                           className='nav-link dropdown-toggle'
                           data-bs-toggle='dropdown'
                           data-bs-auto-close='outside'
                           aria-expanded='false'>
                           Tools
                        </a>
                        <ul className='dropdown-menu'>
                           <li>
                              <a href='#' className='dropdown-item'>
                                 Blog ideas
                              </a>
                           </li>
                           <li>
                              <a href='#' className='dropdown-item'>
                                 Blog intro
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className='nav-item'>
                        <a href='#' className='nav-link'>
                           Pricing
                        </a>
                     </li>
                     <li className='nav-item dropdown'>
                        <a
                           href='#'
                           className='nav-link dropdown-toggle'
                           data-bs-toggle='dropdown'
                           data-bs-auto-close='outside'
                           aria-expanded='false'>
                           Use Cases
                        </a>
                        <ul className='dropdown-menu'>
                           <li>
                              <a href='#' className='dropdown-item'>
                                 Blog tools
                              </a>
                           </li>
                           <li>
                              <a href='#' className='dropdown-item'>
                                 E-commerce
                              </a>
                           </li>
                        </ul>
                     </li>
                  </ul>
                  <button
                     type='button'
                     className='btn btn-primary ml-10'
                     data-bs-toggle='modal'
                     data-bs-target='#modalId'
                  >
                     Sign In
                  </button>
               </nav>
            </div>
         </header>

         <section id='slider' >
            <Carousel cols={1} rows={1} gap={30} loop autoplay={2000}>
               <Carousel.Item>
                  <img width={'100%'} height={'900px'} src={`${PUBLIC_URL}` + 'images/slider1.jpg'} />
                  <div className='text-center ' style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                     <Grid cols={1}>
                        <Grid item span={24}>
                           <p className='h1 dark-mode' style={{ fontSize: '80px', marginTop: '200px' }}>Write Better, Write Faster <br></br>Code With Genie</p>
                        </Grid>
                        <Grid item span={24}>
                           <p className='h1 dark-mode' style={{ fontSize: '25px', padding: '20px 250px', color: 'lightgrey' }}>Unlock the full potential of your projects with our comprehensive  suite of <br></br>tools
                              designed for seamless collaboration and easy navigation. </p>
                        </Grid>
                        <Grid item span={24}>
                           <button type='button' className='btn btn-primary'>Start your project</button>
                        </Grid>
                     </Grid>
                  </div>
               </Carousel.Item>
               <Carousel.Item>
                  <img width={'100%'} height={'900px'} src={`${PUBLIC_URL}` + 'images/slider2.jpg'} />
                  <div className='text-center' style={{ marginTop: "-800px" }} >
                     <p className='h1 dark-mode' style={{ fontSize: '100px', marginTop: '100px' }}>Best Solution2</p>
                  </div>
               </Carousel.Item>
               <Carousel.Item>
                  <img width={'100%'} height={'900px'} src={`${PUBLIC_URL}` + 'images/slider3.jpg'} />
                  <div className='text-center' style={{ marginTop: "-800px" }} >
                     <p className='h1 dark-mode' style={{ fontSize: '100px', marginTop: '100px' }}>Best Solution3</p>
                  </div>
               </Carousel.Item>
            </Carousel>
         </section>
         <section id='marks' className='container'>
            <div className='row d-flex pt-5 mt-5'>
               <div className='col'>
                  <img src={`${PUBLIC_URL + 'images/seeds-fitbit-dark.png'}`} />
               </div>
               <div className='col'>
                  <img src={`${PUBLIC_URL + 'images/seeds-forbes-dark.png'}`} />
               </div>
               <div className='col'>
                  <img src={`${PUBLIC_URL + 'images/seeds-mailchimp-dark.png'}`} />
               </div>

               <div className='col'>
                  <img src={`${PUBLIC_URL + 'images/seeds-layar-dark.png'}`} />
               </div>
               <div className='col'>
                  <img src={`${PUBLIC_URL + 'images/seeds-hubspot-dark.png'}`} />
               </div>
            </div>
         </section>
         <section id='landings' className='container pt-5 mt-2 mt-md-4 mt-lg-3'>
            <h2 className='h1 mt-5 pt-2 pt-lg-0'>What we do?</h2>
            <p className='fs-lg pb-2 pb-md-3 pb-lg-0 mb-5 mb-lg-5'>
               AI-powered productivity tool for all your creative needs.
            </p>
            <div
               className='row gx-3'
               style={{
                  marginTop: '80px'
               }}>
               <div className='col-4'>
                  <div
                     className='card-hover shadow-none position-relative mb-4 mb-lg-5 px-4 pb-3'
                     style={{
                        backgroundColor: '#FFFFFF'
                     }}>
                     <div
                        className='p-1'
                        style={{
                           width: '60px',
                           height: '60px',
                           borderRadius: '10px',
                           textAlign: 'center',
                           backgroundColor: '#6366f1',
                           color: '#FFFFFF',
                           position: 'relative',
                           transform: 'translateY(-50%) translateX(50%)'
                        }}>
                        <i className='bx bxs-rocket fs-1 pt-1'></i>
                     </div>
                     <h3 className='h5 mt-1 mb-3 mb-lg-0'>
                        <a href='landing-mobile-app-showcase-v1.html' className='stretched-link'>
                           Intelligent Content Generation
                           <i
                              className='bx bxs-right-arrow-alt ms-1'
                              style={{
                                 border: '1px solid #6366f1',
                                 lineHeight: '20px',
                                 borderRadius: '10px'
                              }}></i>
                        </a>
                     </h3>
                     <p className='fs-lg pb-2 pb-md-3 pb-lg-0 mb-4 mb-lg-5 mt-3'>
                        Automatically generate high-quality blog posts, articles, and more with AI.
                     </p>
                  </div>
               </div>

               <div className='col-4'>
                  <div
                     className='col card-hover shadow-none position-relative mb-4 mb-lg-5 px-4 pb-3'
                     style={{
                        backgroundColor: '#FFFFFF'
                     }}>
                     <div
                        className='p-1'
                        style={{
                           width: '60px',
                           height: '60px',
                           borderRadius: '10px',
                           textAlign: 'center',
                           backgroundColor: '#6366f1',
                           color: '#FFFFFF',
                           position: 'relative',
                           transform: 'translateY(-50%) translateX(50%)'
                        }}>
                        <i className='bx bxs-rocket fs-1 pt-1'></i>
                     </div>
                     <h3 className='h5 mt-1 mb-lg-0 '>
                        <a href='#' className='strech-link'>
                           Customizable Output
                           <i
                              className='bx bxs-right-arrow-alt ms-1'
                              style={{
                                 border: '1px solid #6366f1',
                                 lineHeight: '20px',
                                 borderRadius: '10px'
                              }}></i>
                        </a>
                     </h3>
                     <p className='fs-lg pb-lg-0 mb-4 mb-lg-5 mt-3'>
                        Fine-tune the tone, style, and format of your content to suit your brand's
                        needs.
                     </p>
                  </div>
               </div>

               <div className='col-4'>
                  <div
                     className='col card-hover shadow-none position-relative mb-4 mb-lg-5 px-4 pb-3'
                     style={{
                        backgroundColor: '#FFFFFF'
                     }}>
                     <div
                        className='p-1'
                        style={{
                           width: '60px',
                           height: '60px',
                           borderRadius: '10px',
                           textAlign: 'center',
                           backgroundColor: '#6366f1',
                           color: '#FFFFFF',
                           position: 'relative',
                           transform: 'translateY(-50%) translateX(50%)'
                        }}>
                        <i className='bx bxs-rocket fs-1 pt-1'></i>
                     </div>
                     <h3 className='h5 mt-1 mb-lg-0'>
                        <a href='#' className='stretched-link'>
                           In-Depth
                           <i
                              className='bx bxs-right-arrow-alt ms-1'
                              style={{
                                 border: '1px solid #6366f1',
                                 lineHeight: '20px',
                                 borderRadius: '10px'
                              }}></i>
                        </a>
                     </h3>
                     <p className='fs-lg pb-lg-0 mb-4 mb-lg-5 mt-3'>
                        Track performance of your content and see topics resonation with your audience.
                     </p>
                  </div>
               </div>
            </div>
            <div className='row container justify-content-center mt-1'>
               <img
                  src={`${PUBLIC_URL + 'images/three-pointers.svg'}`}
                  style={{
                     width: '70%'
                  }} />
               <p className='pt-2 pb-2 text-center'>
                  <span
                     style={{
                        fontWeight: 800,
                        color: '#000000'
                     }}>
                     It is fast and easy.
                  </span>
                  Generate your first and ongoing content with Genie
               </p>
            </div>
         </section>
         <section style={{
            backgroundColor: 'rgb(225 225 225)'
         }}>
            <div className='container'>
               <marquee>
                  <h1 className='pt-3'>
                     Explore
                     <span className='text-primary'>your possibilities</span>
                     with Genie's dashboard
                  </h1>
               </marquee>
               <div className='row d-flex justify-content-between'>
                  <p>
                     Unlock the full potential of your projects with our comprehensive suite of tools
                     designed for seamless collaboration and easy navigation.
                  </p>
               </div>
            </div>
         </section>
         <div className='position-relative py-lg-4 py-xl-5'>
            <div className='position-absolute top-0 start-0 w-100 h-100'>
               <div
                  id='image-1'
                  className='position-absolute top-0 start-0 w-100 h-100 bg-position-center bg-repeat-0 bg-size-cover '
                  style={{
                     backgroundImage: `url(${PUBLIC_URL}` + 'images/landing/software-agency-1/case-study03.jpg)',
                  }}>
                  <span
                     className='position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35'></span>
               </div>

            </div>

            <div className='position-relative zindex-3 py-5' style={{ width: "750px", height: '600px', paddingLeft: '200px' }}>
               <Carousel
                  cols={1}
                  rows={1}
                  gap={30}
                  loop
                  autoplay={2000}

                  arrowLeft={<button type="button" id="case-study-prev" className="btn btn-prev btn-icon btn-sm bg-white ms-5 mb-2" tabIndex="0" aria-label="Next slide">
                     <i className="bx bx-chevron-left"></i>
                  </button>}
                  arrowRight={<button type="button" id="case-study-next" className="btn btn-next btn-icon btn-sm bg-white mb-2" tabIndex="1" aria-label="Next slide" style={{ position: 'absolute', marginLeft: '100px', top: '0px' }}>
                     <i className="bx bx-chevron-right"></i>
                  </button>}
               >
                  <Carousel.Item>
                     <div className='text-start' >
                        <Grid cols={1}>
                           <Card>
                              <CardContent style={{ padding: "40px" }}>
                                 <img src="/images/landing/software-agency-1/case-study-logo01.png" className="d-block mb-3" width="72" alt="Logo" />
                                 <p className='h2'>Which Food is Best for Your Pet: Dry or Wet?</p>

                                 <Divider></Divider>
                                 <p className='pb-2 pb-lg-3 mb-3 mt-3'>
                                    When it comes to feeding your pet, you want to make sure you're giving them the best nutrition possible.
                                    But with so many options out there, it can be hard to decide which type of food is best for your pet.
                                    Should you go with dry food or wet food?
                                 </p>
                                 <button className='btn btn-primary'>View Case Study</button>
                              </CardContent>

                           </Card>
                        </Grid>
                     </div>
                  </Carousel.Item>
                  <Carousel.Item>
                     <div className='text-start ' >
                        <Grid cols={1}>
                           <Card>
                              <CardContent style={{ padding: "40px" }}>
                                 <img src="/images/landing/software-agency-1/case-study-logo01.png" className="d-block mb-3" width="72" alt="Logo" />
                                 <p className='h2'>What's the Difference Between Dry and Wet Food?</p>

                                 <Divider></Divider>
                                 <p className='pb-2 pb-lg-3 mb-3 mt-3'>
                                    Dry food is typically made up of kibble, which is a combination of grains, proteins, and other ingredients.
                                    It's usually cheaper than wet food and can be stored for longer periods of time. wet food, on the other hand, is
                                    usually made up of canned or pouch food that contains more moisture than dry food. It's usually more expensive than dry
                                    food and needs to be refrigerated after opening.
                                 </p>
                                 <button className='btn btn-primary'>View Case Study</button>
                              </CardContent>

                           </Card>
                        </Grid>
                     </div>
                  </Carousel.Item>
                  <Carousel.Item>
                     <div className='text-start ' >
                        <Grid cols={1}>
                           <Card>
                              <CardContent style={{ padding: "40px" }}>
                                 <img src="/images/landing/software-agency-1/case-study-logo01.png" className="d-block mb-3" width="72" alt="Logo" />
                                 <p className='h2'>How to choose the Hight Food for Your Pet</p>

                                 <Divider></Divider>
                                 <p className='pb-2 pb-lg-3 mb-3 mt-3'>
                                    When it comes to choosing the right food for your pet, there are a few things to consider.
                                    First, you should think about your pet's age, size, and activity level.
                                    Puppies and kittens, for example, need more calories and nutrients than adult pets.
                                    You should also consider your pet's health and any special dietary needs they may have.
                                 </p>
                                 <button className='btn btn-primary'>View Case Study</button>
                              </CardContent>

                           </Card>
                        </Grid>
                     </div>
                  </Carousel.Item>
               </Carousel>
            </div>
         </div>
         <section
            id='desktop1'
            className='container text-center pt-2 mt-2 mt-md-4 mt-lg-5'>
            <div
               className='row justify-content-center '
               style={{
                  position: 'relative'
               }}>
               <div className='col-4'>
                  <div
                     className='dark-mode card h-100 zi-1'
                     style={{
                        backgroundColor: 'rgb(19 2 52)'
                     }}>
                     <div className='card-header text-start'>
                        <h1 className='card-title mt-5 text-primary'>200+</h1>
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
               </div>
               <div className='col-8'>

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
                                       <div className='col-1 text-start d-flex align-items-center'>
                                          <div
                                             style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                overflow: 'hidden'
                                             }}>
                                             <img src={`${PUBLIC_URL}` + 'images/avatar/01.jpg'} width='50px' height='50px' />
                                          </div>
                                       </div>
                                       <div className='col-11'>
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
                                       <div className='col-1 text-start d-flex align-items-center'>
                                          <div
                                             style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                overflow: 'hidden'
                                             }}>
                                             <img src={`${PUBLIC_URL}` + 'images/avatar/01.jpg'} width='50px' height='50px' />
                                          </div>
                                       </div>
                                       <div className='col-11'>
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
                                       <div className='col-1 text-start d-flex align-items-center'>
                                          <div
                                             style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                overflow: 'hidden'
                                             }}>
                                             <img src={`${PUBLIC_URL}` + 'images/avatar/01.jpg'} width='50px' height='50px' />
                                          </div>
                                       </div>
                                       <div className='col-11'>
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


               </div>
            </div>
         </section>

         <a href='#top' className={`btn-scroll-top ${backtop}`} data-scroll>
            <span className='btn-scroll-top-tooltip text-muted fs-sm me-2'>Top</span>
            <i className='btn-scroll-top-icon bx bx-chevron-up'></i>
         </a>
         <div className='modal fade' id='modalId' tabIndex={-1} role='dialog'>
            <div className='modal-dialog modal-dialog-centered' role='document'>
               <div className='modal-content'>
                  <div className='modal-header'>
                     <ul className='nav nav-tabs mb-0' role='tablist'>
                        <li className='nav-item fs-sm mb-0'>
                           <a
                              className='nav-link active'
                              href='#signin'
                              data-bs-toggle='tab'
                              role='tab'
                              aria-selected='true'>
                              <i className='bx bx-lock-open fs-base me-2'></i>
                              Sign in
                           </a>
                        </li>
                        <li className='nav-item fs-sm mb-0'>
                           <a
                              className='nav-link'
                              href='#signup'
                              data-bs-toggle='tab'
                              role='tab'
                              aria-selected='false'>
                              <i className='bx bx-user fs-base me-2'></i>
                              Sign up
                           </a>
                        </li>
                     </ul>
                     <button
                        className='btn-close'
                        type='button'
                        data-bs-dismiss='modal'
                        aria-label='Close'></button>
                  </div>

                  <div className='modal-body tab-content py-4'>
                     <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
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
               </div>
            </div>
         </div>
         <footer className='footer border-top pt-3 pb-4 pb-lg-5 mt-5'>
            <div className='container pt-2 pt-md-4 pt-lg-5 pb-xl-3'>
               <div className='row d-flex justify-content-between'>
                  <div className='col-3'>
                     <img
                        className='mb-4'
                        src={`${PUBLIC_URL}` + 'images/logos/seeds-logo.png'}
                        width={'200px'} />
                     <ul className='list-unstyled'>
                        <li>
                           <a className='link-sm link-secondary1'>
                              <i className='bx bx-phone me-1'></i>
                              153 Williamson Plaza, Maggieberg
                           </a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>
                              <i className='bx bx-phone me-1'></i>
                              +1 (062) 109-9222
                           </a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>
                              <i className='bx bx-mail-send me-1'></i>
                              support@krashless.com
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className='col-2'>
                     <p className='h5 pb-3'>Features</p>
                     <ul className='list-unstyled'>
                        <li>
                           <a className='link-sm link-secondary1'>Dashboard</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Pricing</a>
                        </li>
                     </ul>
                  </div>
                  <div className='col-2'>
                     <p className='h5 pb-3'>E-Commerce</p>
                     <ul className='list-unstyled'>
                        <li>
                           <a className='link-sm link-secondary1'>Blog tools</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>E-Commerce</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Social media tools</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Digital Ad copy</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Brainstorming tools</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Personal tools</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Images</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Video Script Generator</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Writing Tools</a>
                        </li>
                     </ul>
                  </div>
                  <div className='col-2'>
                     <p className='h5 pb-3'>Tools</p>
                     <ul className='list-unstyled'>
                        <li>
                           <a className='link-sm link-secondary1'>Blog ideas</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Blog intro</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Keyword generator</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Product description</a>
                        </li>
                     </ul>
                  </div>
                  <div className='col-2'>
                     <p className='h5 pb-3'>Resources</p>
                     <ul className='list-unstyled'>
                        <li>
                           <a className='link-sm link-secondary1'>Your Account</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Genie Editor</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Get started</a>
                        </li>
                        <li>
                           <a className='link-sm link-secondary1'>Sign in</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </footer>
         <footer className='footer  pt-3 pb-4 pb-lg-5'>
            <div className='container border-top pt-2 pt-md-4 pt-lg-5 pb-xl-3'>
               <div className='row d-flex justify-content-center'>
                  <p className='text-center'>© Genie 2023. All rights reserved.</p>
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
