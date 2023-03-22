// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import AlertTitle from '@mui/material/AlertTitle'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import DialogTitle from '@mui/material/DialogTitle'
import OutlinedInput from '@mui/material/OutlinedInput'
import DialogContent from '@mui/material/DialogContent'
import InputAdornment from '@mui/material/InputAdornment'
import TableContainer from '@mui/material/TableContainer'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const data = [
  {
    color: 'info.main',
    location: 'Switzerland',
    device: 'HP Specter 360',
    icon: 'tabler:brand-windows',
    browser: 'Chrome on Windows',
    recentActivity: '10, July 2022 20:07'
  },
  {
    color: 'error.main',
    device: 'iPhone 12x',
    location: 'Australia',
    browser: 'Chrome on iPhone',
    icon: 'tabler:device-mobile',
    recentActivity: '13, July 2022 10:10'
  },
  {
    location: 'Dubai',
    color: 'success.main',
    device: 'OnePlus 9 Pro',
    icon: 'tabler:brand-android',
    browser: 'Chrome on Android',
    recentActivity: '4, July 2022 15:15'
  },
  {
    location: 'India',
    device: 'Apple IMac',
    color: 'secondary.main',
    icon: 'tabler:brand-apple',
    browser: 'Chrome on macOS',
    recentActivity: '20, July 2022 21:01'
  },
  {
    color: 'info.main',
    location: 'Switzerland',
    device: 'HP Specter 360',
    browser: 'Chrome on Windows',
    icon: 'tabler:brand-windows',
    recentActivity: '15, July 2022 11:15'
  },
  {
    location: 'Dubai',
    color: 'success.main',
    device: 'OnePlus 9 Pro',
    icon: 'tabler:brand-android',
    browser: 'Chrome on Android',
    recentActivity: '14, July 2022 20:20'
  }
]

const UserViewSecurity = () => {
  // ** States
  const [defaultValues, setDefaultValues] = useState({ mobile: '+1(968) 819-2547' })
  const [mobileNumber, setMobileNumber] = useState(defaultValues.mobile)
  const [openEditMobileNumber, setOpenEditMobileNumber] = useState(false)

  const [values, setValues] = useState({
    newPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showConfirmNewPassword: false
  })

  // Handle Password
  const handleNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }

  // Handle Confirm Password
  const handleConfirmNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }

  // Handle edit mobile number dialog
  const handleEditMobileNumberClickOpen = () => setOpenEditMobileNumber(true)
  const handleEditMobileNumberClose = () => setOpenEditMobileNumber(false)

  // Handle button click inside the dialog
  const handleCancelClick = () => {
    setMobileNumber(defaultValues.mobile)
    handleEditMobileNumberClose()
  }

  const handleSubmitClick = () => {
    setDefaultValues({ ...defaultValues, mobile: mobileNumber })
    handleEditMobileNumberClose()
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Change Password' />
          <CardContent>
            <Alert icon={false} severity='warning' sx={{ mb: 4 }}>
              <AlertTitle
                sx={{ fontWeight: 500, fontSize: '1.25rem', mb: theme => `${theme.spacing(2.5)} !important` }}
              >
                Ensure that these requirements are met
              </AlertTitle>
              Minimum 8 characters long, uppercase & symbol
            </Alert>

            <form onSubmit={e => e.preventDefault()}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor='user-view-security-new-password'>New Password</InputLabel>
                    <OutlinedInput
                      label='New Password'
                      value={values.newPassword}
                      id='user-view-security-new-password'
                      onChange={handleNewPasswordChange('newPassword')}
                      type={values.showNewPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowNewPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <Icon icon={values.showNewPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor='user-view-security-confirm-new-password'>Confirm New Password</InputLabel>
                    <OutlinedInput
                      label='Confirm New Password'
                      value={values.confirmNewPassword}
                      id='user-view-security-confirm-new-password'
                      type={values.showConfirmNewPassword ? 'text' : 'password'}
                      onChange={handleConfirmNewPasswordChange('confirmNewPassword')}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                            onClick={handleClickShowConfirmNewPassword}
                          >
                            <Icon icon={values.showConfirmNewPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Button type='submit' variant='contained'>
                    Change Password
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Two-step verification'
            titleTypographyProps={{ sx: { mb: 2 } }}
            subheader='Keep your account secure with authentication step.'
            sx={{ pb: 4, '& .MuiCardHeader-subheader': { mt: 0, fontSize: '1rem', color: 'text.secondary' } }}
          />
          <CardContent>
            <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>SMS</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography sx={{ color: 'text.secondary' }}>{mobileNumber}</Typography>
              <div>
                <IconButton
                  size='small'
                  aria-label='edit'
                  sx={{ color: 'text.secondary' }}
                  onClick={handleEditMobileNumberClickOpen}
                >
                  <Icon icon='tabler:edit' />
                </IconButton>
                <IconButton size='small' aria-label='delete' sx={{ color: 'text.secondary' }}>
                  <Icon icon='tabler:trash' />
                </IconButton>
              </div>
            </Box>

            <Divider
              sx={{ mt: theme => `${theme.spacing(0.75)} !important`, mb: theme => `${theme.spacing(4)} !important` }}
            />

            <Typography sx={{ color: 'text.secondary', '& a': { color: 'primary.main', textDecoration: 'none' } }}>
              Two-factor authentication adds an additional layer of security to your account by requiring more than just
              a password to log in.{' '}
              <Link href='/' onClick={e => e.preventDefault()}>
                Learn more
              </Link>
              .
            </Typography>
          </CardContent>

          <Dialog
            open={openEditMobileNumber}
            onClose={handleCancelClick}
            aria-labelledby='user-view-security-edit-mobile-number'
            sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
            aria-describedby='user-view-security-edit-mobile-number-description'
          >
            <DialogTitle
              id='user-view-security-edit-mobile-number'
              sx={{
                textAlign: 'center',
                fontSize: '1.5rem !important',
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
              }}
            >
              Enable One Time Password
            </DialogTitle>

            <DialogContent
              sx={{
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
              }}
            >
              <Typography variant='h6'>Verify Your Mobile Number for SMS</Typography>
              <Typography variant='body2' sx={{ mt: 2, mb: 5 }}>
                Enter your mobile phone number with country code and we will send you a verification code.
              </Typography>
              <form onSubmit={e => e.preventDefault()}>
                <TextField
                  autoFocus
                  fullWidth
                  value={mobileNumber}
                  label='Mobile number with country code'
                  onChange={e => setMobileNumber(e.target.value)}
                />
                <Box sx={{ mt: 6.5, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button type='reset' color='secondary' variant='outlined' onClick={handleCancelClick}>
                    Cancel
                  </Button>
                  <Button type='submit' sx={{ ml: 3 }} variant='contained' onClick={handleSubmitClick}>
                    Send
                  </Button>
                </Box>
              </form>
            </DialogContent>
          </Dialog>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Recent devices' />

          <Divider sx={{ m: '0 !important' }} />

          <TableContainer>
            <Table sx={{ minWidth: 500 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Browser</TableCell>
                  <TableCell>Device</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Recent Activity</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((item, index) => (
                  <TableRow hover key={index} sx={{ '&:last-of-type td': { border: 0 } }}>
                    <TableCell>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          '& svg': { mr: 2, fontSize: '1.125rem', color: item.color }
                        }}
                      >
                        <Icon icon={item.icon} />
                        <Typography noWrap sx={{ color: 'text.secondary' }}>
                          {item.browser}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography noWrap sx={{ color: 'text.secondary' }}>
                        {item.device}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography noWrap sx={{ color: 'text.secondary' }}>
                        {item.location}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography noWrap sx={{ color: 'text.secondary' }}>
                        {item.recentActivity}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserViewSecurity
