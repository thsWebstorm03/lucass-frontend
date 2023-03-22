// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const StepPersonalDetails = ({ handleNext, handlePrev }) => {
  return (
    <>
      <Box sx={{ mb: 6 }}>
        <Typography variant='h5' sx={{ mb: 1.5 }}>
          Personal Information
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>Enter Your Personal Information</Typography>
      </Box>

      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth placeholder='john' label='First Name' />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Last Name' placeholder='Doe' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Mobile'
            placeholder='202 555 0111'
            InputProps={{
              startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth type='number' label='Pincode' placeholder='689421' />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField label='Address' placeholder='7777, Mendez Plains, Florida' />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label='Landmark' placeholder='Mendez Plains' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='City' placeholder='Miami' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id='state-select'>State</InputLabel>
            <Select labelId='state-select' label='State' defaultValue='New York'>
              <MenuItem value='New York'>New York</MenuItem>
              <MenuItem value='California'>California</MenuItem>
              <MenuItem value='Florida'>Florida</MenuItem>
              <MenuItem value='Washington'>Washington</MenuItem>
              <MenuItem value='Texas'>Texas</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6)} !important` }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button color='secondary' variant='contained' onClick={handlePrev} sx={{ '& svg': { mr: 2 } }}>
              <Icon fontSize='1.125rem' icon='tabler:arrow-left' />
              Previous
            </Button>
            <Button variant='contained' onClick={handleNext} sx={{ '& svg': { ml: 2 } }}>
              Next
              <Icon fontSize='1.125rem' icon='tabler:arrow-right' />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default StepPersonalDetails
