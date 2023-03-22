// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const CardStatisticsOrderVisits = () => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ gap: 2, mb: 8.75, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <Typography variant='body2' sx={{ color: 'text.disabled' }}>
              Sales Overview
            </Typography>
            <Typography variant='h5'>$42.5k</Typography>
          </div>
          <Typography sx={{ color: 'success.main' }}>+18.2%</Typography>
        </Box>
        <Box sx={{ mb: 5, gap: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center' }}>
              <CustomAvatar skin='light' color='info' variant='rounded' sx={{ mr: 1.5, height: 24, width: 24 }}>
                <Icon icon='tabler:shopping-cart' fontSize='1.125rem' />
              </CustomAvatar>
              <Typography sx={{ color: 'text.secondary' }}>Order</Typography>
            </Box>
            <Typography variant='h6'>62.2%</Typography>
            <Typography variant='body2' sx={{ color: 'text.disabled' }}>
              6,440
            </Typography>
          </Box>
          <Divider flexItem sx={{ m: 0 }} orientation='vertical'>
            <CustomAvatar
              skin='light'
              color='secondary'
              sx={{ height: 24, width: 24, fontSize: '0.6875rem', color: 'text.secondary' }}
            >
              VS
            </CustomAvatar>
          </Divider>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
            <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ mr: 1.5, color: 'text.secondary' }}>Visits</Typography>
              <CustomAvatar skin='light' variant='rounded' sx={{ height: 24, width: 24 }}>
                <Icon icon='tabler:link' fontSize='1.125rem' />
              </CustomAvatar>
            </Box>
            <Typography variant='h6'>25.5%</Typography>
            <Typography variant='body2' sx={{ color: 'text.disabled' }}>
              12,749
            </Typography>
          </Box>
        </Box>
        <LinearProgress
          value={65}
          color='info'
          variant='determinate'
          sx={{
            height: 10,
            '&.MuiLinearProgress-colorInfo': { backgroundColor: 'primary.main' },
            '& .MuiLinearProgress-bar': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0
            }
          }}
        />
      </CardContent>
    </Card>
  )
}

export default CardStatisticsOrderVisits
