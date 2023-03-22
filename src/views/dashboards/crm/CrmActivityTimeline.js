// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'
import MuiCardHeader from '@mui/material/CardHeader'

// ** Custom Components Imports
import Icon from 'src/@core/components/icon'
import OptionsMenu from 'src/@core/components/option-menu'

// Styled Timeline component
const Timeline = styled(MuiTimeline)({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

const CardHeader = styled(MuiCardHeader)(({ theme }) => ({
  '& .MuiTypography-root': {
    lineHeight: 1.6,
    fontWeight: 500,
    fontSize: '1.125rem',
    letterSpacing: '0.15px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem'
    }
  }
}))

const CrmActivityTimeline = () => {
  return (
    <Card>
      <CardHeader
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 3 } }}>
            <Icon fontSize='1.25rem' icon='tabler:list-details' />
            <Typography>Activity Timeline</Typography>
          </Box>
        }
        action={
          <OptionsMenu
            options={['Share timeline', 'Suggest edits', 'Report bug']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <CardContent>
        <Timeline sx={{ my: 0, py: 0 }}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='warning' sx={{ mt: 1.5 }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ pt: 0, mt: 0, mb: theme => `${theme.spacing(2)} !important` }}>
              <Box
                sx={{
                  mb: 0.5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Client Meeting</Typography>
                <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                  Today
                </Typography>
              </Box>
              <Typography sx={{ mb: 2.5, color: 'text.secondary' }}>Project meeting with john @10:15am</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src='/images/avatars/3.png' sx={{ mr: 3, width: 38, height: 38 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography sx={{ fontWeight: 500 }}>Lester McCarthy (Client)</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>CEO of Infibeam</Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, mb: theme => `${theme.spacing(2)} !important` }}>
              <Box
                sx={{
                  mb: 0.5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Create a new project for client</Typography>
                <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                  2 days ago
                </Typography>
              </Box>
              <Typography sx={{ color: 'text.secondary' }}>Add files to new design folder</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='info' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, mb: theme => `${theme.spacing(2)} !important` }}>
              <Box
                sx={{
                  mb: 0.5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Shared 2 New Project Files</Typography>
                <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                  6 days ago
                </Typography>
              </Box>
              <Typography sx={{ mb: 2.5, color: 'text.secondary' }}>Sent by Mollie Dixon</Typography>
              <Box sx={{ rowGap: 1, columnGap: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 2, color: 'warning.main' } }}>
                  <Icon fontSize='1.25rem' icon='tabler:file-text' />
                  <Typography sx={{ fontWeight: 500 }}>App Guidelines</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 2, color: 'success.main' } }}>
                  <Icon fontSize='1.25rem' icon='tabler:table' />
                  <Typography sx={{ fontWeight: 500 }}>Testing Results</Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem sx={{ minHeight: 0 }}>
            <TimelineSeparator>
              <TimelineDot color='secondary' />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, pb: 0 }}>
              <Box
                sx={{
                  mb: 0.5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Project status updated</Typography>
                <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                  10 days ago
                </Typography>
              </Box>
              <Typography sx={{ color: 'text.secondary' }}>WooCommerce iOS App Completed</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default CrmActivityTimeline
