// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabPanel from '@mui/lab/TabPanel'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiTabList from '@mui/lab/TabList'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const TabList = styled(MuiTabList)(({ theme }) => ({
  border: 0,
  marginRight: 0,
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minHeight: 38,
    minWidth: 300,
    maxWidth: 300,
    lineHeight: 1.3,
    textAlign: 'start',
    alignItems: 'flex-start',
    borderRadius: theme.shape.borderRadius,
    '&:not(:last-child)': {
      marginBottom: theme.spacing(1.5)
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '100%',
      maxWidth: '100%'
    }
  }
}))

const HelpCenterSubcategory = ({ data, activeTab }) => {
  // ** State
  const [isLoading, setIsLoading] = useState(false)
  const [tabValue, setTabValue] = useState(activeTab)

  // ** Hook
  const router = useRouter()

  const handleChange = (event, newValue) => {
    setIsLoading(true)
    router.push(`/pages/help-center/${data.slug}/${newValue}`).then(() => setIsLoading(false))
  }
  useEffect(() => {
    if (activeTab && activeTab !== tabValue) {
      setTabValue(activeTab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  const renderTabs = () => {
    return data && data.subCategories.map(tab => <Tab key={tab.slug} value={tab.slug} label={tab.title} />)
  }

  const renderContent = () => {
    const dataToRender = data.subCategories.filter(item => item.slug === tabValue)[0]

    return (
      <TabPanel value={tabValue} sx={{ p: 0, width: '100%' }}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
              <Avatar variant='rounded' sx={{ mr: 3, width: 42, height: 42 }}>
                <Icon fontSize='1.875rem' icon={dataToRender.icon} />
              </Avatar>
              <Typography variant='h5'>{dataToRender.title}</Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
              {dataToRender.articles.map(article => {
                return (
                  <Box
                    key={article.title}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '&:not(:last-of-type)': { mb: 4 },
                      '& svg': { mr: 1.5, color: 'text.disabled' }
                    }}
                  >
                    <Icon fontSize='1.125rem' icon='tabler:chevron-right' />
                    <Typography
                      component={Link}
                      sx={{ color: 'primary.main', textDecoration: 'none' }}
                      href={`/pages/help-center/${data.slug}/${activeTab}/${article.slug}`}
                    >
                      {article.title}
                    </Typography>
                  </Box>
                )
              })}
            </Box>

            <Button
              component={Link}
              variant='outlined'
              href='/pages/help-center'
              startIcon={<Icon icon='tabler:chevron-left' />}
            >
              Back to help center
            </Button>
          </CardContent>
        </Card>
      </TabPanel>
    )
  }

  return (
    <TabContext value={tabValue}>
      <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'] }}>
        <Box sx={{ mr: [0, 0, 6], mb: [6, 6, 0], display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ mb: 4 }}>
            {data.title}
          </Typography>
          <TabList orientation='vertical' onChange={handleChange} aria-label='vertical tabs example'>
            {renderTabs()}
          </TabList>
        </Box>
        {isLoading ? (
          <Box sx={{ mt: 11, width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <CircularProgress sx={{ mb: 4 }} />
            <Typography>Loading...</Typography>
          </Box>
        ) : (
          renderContent()
        )}
      </Box>
    </TabContext>
  )
}

export default HelpCenterSubcategory
