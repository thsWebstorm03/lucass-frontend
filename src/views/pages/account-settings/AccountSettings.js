// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiTabList from '@mui/lab/TabList'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Tabs Imports
import TabAccount from 'src/views/pages/account-settings/TabAccount'
import TabBilling from 'src/views/pages/account-settings/TabBilling'
import TabSecurity from 'src/views/pages/account-settings/TabSecurity'
import TabConnections from 'src/views/pages/account-settings/TabConnections'
import TabNotifications from 'src/views/pages/account-settings/TabNotifications'

const TabList = styled(MuiTabList)(({ theme }) => ({
  border: '0 !important',
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minWidth: 65,
    minHeight: 38,
    lineHeight: 1,
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('md')]: {
      minWidth: 130
    }
  }
}))

const AccountSettings = ({ tab, apiPricingPlanData }) => {
  // ** State
  const [activeTab, setActiveTab] = useState(tab)
  const [isLoading, setIsLoading] = useState(false)

  // ** Hooks
  const router = useRouter()
  const hideText = useMediaQuery(theme => theme.breakpoints.down('md'))

  const handleChange = (event, value) => {
    setIsLoading(true)
    router.push(`/pages/account-settings/${value.toLowerCase()}`).then(() => setIsLoading(false))
  }
  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const tabContentList = {
    account: <TabAccount />,
    security: <TabSecurity />,
    connections: <TabConnections />,
    notifications: <TabNotifications />,
    billing: <TabBilling apiPricingPlanData={apiPricingPlanData} />
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <TabContext value={activeTab}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <TabList
                variant='scrollable'
                scrollButtons='auto'
                onChange={handleChange}
                aria-label='customized tabs example'
              >
                <Tab
                  value='account'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                      <Icon fontSize='1.25rem' icon='tabler:users' />
                      {!hideText && 'Account'}
                    </Box>
                  }
                />
                <Tab
                  value='security'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                      <Icon fontSize='1.25rem' icon='tabler:lock' />
                      {!hideText && 'Security'}
                    </Box>
                  }
                />
                <Tab
                  value='billing'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                      <Icon fontSize='1.25rem' icon='tabler:file-text' />
                      {!hideText && 'Billing'}
                    </Box>
                  }
                />
                <Tab
                  value='notifications'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                      <Icon fontSize='1.25rem' icon='tabler:bell' />
                      {!hideText && 'Notifications'}
                    </Box>
                  }
                />
                <Tab
                  value='connections'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                      <Icon fontSize='1.25rem' icon='tabler:link' />
                      {!hideText && 'Connections'}
                    </Box>
                  }
                />
              </TabList>
            </Grid>
            <Grid item xs={12}>
              {isLoading ? (
                <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <CircularProgress sx={{ mb: 4 }} />
                  <Typography>Loading...</Typography>
                </Box>
              ) : (
                <TabPanel sx={{ p: 0 }} value={activeTab}>
                  {tabContentList[activeTab]}
                </TabPanel>
              )}
            </Grid>
          </Grid>
        </TabContext>
      </Grid>
    </Grid>
  )
}

export default AccountSettings
