// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

const data = {
  new: [
    {
      sender: {
        name: 'Micheal Hughes',
        address: '101 Boulder, California (CA), 933130'
      },
      receiver: {
        name: 'Daisy Coleman',
        address: '939 Orange, California (CA), 910614'
      }
    },
    {
      sender: {
        name: 'Glenn Todd',
        address: '1713 Garnet, California (CA), 939573'
      },
      receiver: {
        name: 'Arthur West',
        address: '156 Blaze, California (CA), 925878'
      }
    }
  ],
  preparing: [
    {
      sender: {
        name: 'Rose Cole',
        address: '61 Unions, California (CA), 922523'
      },
      receiver: {
        name: 'Polly Spencer',
        address: '865 Delta, California (CA), 932830'
      }
    },
    {
      sender: {
        name: 'Jerry Wood',
        address: '37 Marjory, California (CA), 951958'
      },
      receiver: {
        name: 'Sam McCormick',
        address: '926 Reynolds, California (CA), 910279'
      }
    }
  ],
  shipping: [
    {
      sender: {
        name: 'Alex Walton',
        address: '78 Judson, California (CA), 956084'
      },
      receiver: {
        name: 'Eula Griffin',
        address: '56 Bernard, California (CA), 965133'
      }
    },
    {
      sender: {
        name: 'Lula Barton',
        address: '95 Gaylord, California (CA), 991955'
      },
      receiver: {
        name: 'Craig Jacobs',
        address: '73 Sandy, California (CA), 954566'
      }
    }
  ]
}

const Timeline = styled(MuiTimeline)({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  },
  '& .MuiTimelineDot-root': {
    border: 0,
    padding: 0
  }
})

const CardOrders = () => {
  // ** State
  const [value, setValue] = useState('new')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <CardHeader
        title='Orders'
        subheader='62 deliveries in progress'
        subheaderTypographyProps={{ sx: { mt: '0 !important' } }}
        action={
          <OptionsMenu
            options={['Show all orders', 'Share', 'Refresh']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <TabContext value={value}>
        <TabList variant='fullWidth' onChange={handleChange} aria-label='tabs in orders card'>
          <Tab value='new' label='New' />
          <Tab value='preparing' label='Preparing' />
          <Tab value='shipping' label='Shipping' />
        </TabList>
        <TabPanel value={value}>
          {data[value].map((item, index) => {
            return (
              <Fragment key={index}>
                <Timeline sx={{ my: 0, py: 0 }}>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color='success' variant='outlined' sx={{ mt: 0 }}>
                        <Icon fontSize='1.25rem' icon='tabler:circle-check' />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ mt: 0, pt: 0, mb: theme => `${theme.spacing(1)} !important` }}>
                      <Typography variant='body2' sx={{ fontWeight: 500, color: 'success.main' }}>
                        Sender
                      </Typography>
                      <Typography sx={{ fontWeight: 500 }}>{item.sender.name}</Typography>
                      <Typography sx={{ color: 'text.disabled' }}>{item.sender.address}</Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem sx={{ minHeight: 0 }}>
                    <TimelineSeparator>
                      <TimelineDot color='primary' variant='outlined' sx={{ mt: 1.5 }}>
                        <Icon fontSize='1.25rem' icon='tabler:map-pin' />
                      </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent sx={{ mt: 0, pb: 0 }}>
                      <Typography variant='body2' sx={{ fontWeight: 500, color: 'primary.main' }}>
                        Receiver
                      </Typography>
                      <Typography sx={{ fontWeight: 500 }}>{item.receiver.name}</Typography>
                      <Typography sx={{ color: 'text.disabled' }}>{item.receiver.address}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
                {index !== data[value].length - 1 && <Divider sx={{ my: 4, borderStyle: 'dashed' }} />}
              </Fragment>
            )
          })}
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default CardOrders
