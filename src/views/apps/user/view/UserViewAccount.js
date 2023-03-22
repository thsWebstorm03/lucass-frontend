// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Component Imports
import UsersInvoiceListTable from 'src/views/apps/user/view/UsersInvoiceListTable'
import UsersProjectListTable from 'src/views/apps/user/view/UsersProjectListTable'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

// Styled Timeline component
const Timeline = styled(MuiTimeline)(({ theme }) => ({
  margin: 0,
  padding: 0,
  marginLeft: theme.spacing(0.75),
  '& .MuiTimelineItem-root': {
    '&:before': {
      display: 'none'
    },
    '&:last-child': {
      minHeight: 60
    }
  }
}))

const UserViewAccount = ({ invoiceData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UsersProjectListTable />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='User Activity Timeline'
            action={
              <OptionsMenu
                options={['Share timeline', 'Suggest edits', 'Report bug']}
                iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
              />
            }
          />
          <CardContent>
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='warning' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
                  <Box
                    sx={{
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
                  <Typography sx={{ mb: 3, color: 'text.secondary' }}>Project meeting with john @10:15am</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt='Avatar' src='/images/avatars/3.png' sx={{ width: 38, height: 38, mr: 3 }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ fontWeight: 500 }}>Leona Watkins (Client)</Typography>
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
                <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography sx={{ mr: 2, fontWeight: 500 }}>Create a new project for client</Typography>
                    <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                      2 Days Ago
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
                <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography sx={{ mr: 2, fontWeight: 500 }}>Shared 2 New Project Files</Typography>
                    <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                      6 Days Ago
                    </Typography>
                  </Box>
                  <Typography sx={{ mb: 3, color: 'text.secondary' }}>Sent by Mollie Dixon</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 2 } }}>
                    <Box sx={{ mr: 3, display: 'flex', alignItems: 'center', color: 'warning.main' }}>
                      <Icon fontSize='1.25rem' icon='tabler:file-text' />
                      <Typography sx={{ fontWeight: 500 }}>App Guidelines</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
                      <Icon fontSize='1.25rem' icon='tabler:table' />
                      <Typography sx={{ fontWeight: 500 }}>Testing Results</Typography>
                    </Box>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='secondary' />
                </TimelineSeparator>
                <TimelineContent>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography sx={{ mr: 2, fontWeight: 500 }}>Project status updated</Typography>
                    <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                      10 Days Ago
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'text.secondary' }}>WooCommerce iOS App Completed</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <UsersInvoiceListTable invoiceData={invoiceData} />
      </Grid>
    </Grid>
  )
}

export default UserViewAccount
