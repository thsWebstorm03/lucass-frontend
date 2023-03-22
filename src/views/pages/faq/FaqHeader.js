// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiTextField from '@mui/material/TextField'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Styled Card component
const Card = styled(MuiCard)(() => ({
  border: 0,
  boxShadow: 'none',
  backgroundSize: 'cover',
  backgroundColor: 'transparent',
  backgroundImage: 'url(/images/pages/header-bg.png)'
}))

// Styled TextField component
const TextField = styled(MuiTextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper
  },
  [theme.breakpoints.up('sm')]: {
    width: '55%'
  }
}))

const FaqHeader = props => {
  // ** Props
  const { searchTerm, setSearchTerm } = props

  const handleFaqFilter = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <Card>
      <CardContent sx={{ pt: 24, textAlign: 'center', pb: theme => `${theme.spacing(24)} !important` }}>
        <Typography sx={{ mb: 4, fontWeight: 500, fontSize: '1.625rem', lineHeight: 1.385 }}>
          Hello, how can we help?
        </Typography>

        <TextField
          value={searchTerm}
          placeholder='Search a question....'
          onChange={e => handleFaqFilter(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Icon fontSize='1.25rem' icon='tabler:search' />
              </InputAdornment>
            )
          }}
        />
        <Typography sx={{ mt: 4, color: 'text.secondary' }}>
          or choose a category to quickly find the help you need
        </Typography>
      </CardContent>
    </Card>
  )
}

export default FaqHeader
