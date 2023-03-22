// ** React Imports
import { useState, Fragment } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiMenu from '@mui/material/Menu'
import MuiMenuItem from '@mui/material/MenuItem'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Components
import PerfectScrollbarComponent from 'react-perfect-scrollbar'

// ** Styled Menu component
const Menu = styled(MuiMenu)(({ theme }) => ({
  '& .MuiMenu-paper': {
    width: 350,
    overflow: 'hidden',
    marginTop: theme.spacing(4.5),
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  '& .MuiMenu-list': {
    padding: 0
  }
}))

// ** Styled MenuItem component
const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  '&:not(:last-of-type)': {
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

// ** Styled PerfectScrollbar component
const PerfectScrollbar = styled(PerfectScrollbarComponent)({
  maxHeight: '30rem'
})

const ScrollWrapper = ({ children, hidden }) => {
  if (hidden) {
    return <Box sx={{ maxHeight: '30rem', overflowY: 'auto', overflowX: 'hidden' }}>{children}</Box>
  } else {
    return <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }}>{children}</PerfectScrollbar>
  }
}

const ShortcutsDropdown = props => {
  // ** Props
  const { shortcuts, settings } = props

  // ** States
  const [anchorEl, setAnchorEl] = useState(null)

  // ** Hook
  const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'))

  // ** Vars
  const { direction } = settings

  const handleDropdownOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = () => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      <IconButton color='inherit' aria-haspopup='true' onClick={handleDropdownOpen} aria-controls='customized-menu'>
        <Icon fontSize='1.5rem' icon='tabler:layout-grid-add' />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
      >
        <MenuItem
          disableRipple
          disableTouchRipple
          sx={{
            m: 0,
            cursor: 'default',
            userSelect: 'auto',
            p: theme => theme.spacing(4, 6),
            backgroundColor: 'transparent !important'
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              '& svg': { color: 'text.secondary' }
            }}
          >
            <Typography variant='h6'>Shortcuts</Typography>
            <Tooltip title='Add Shortcut' placement='top'>
              <IconButton size='small'>
                <Icon fontSize='1.5rem' icon='tabler:apps' />
              </IconButton>
            </Tooltip>
          </Box>
        </MenuItem>
        <Divider sx={{ my: '0 !important' }} />
        <ScrollWrapper hidden={hidden}>
          <Grid
            container
            spacing={0}
            sx={{
              '& .MuiGrid-root': {
                borderBottom: theme => `1px solid ${theme.palette.divider}`,
                '&:nth-of-type(odd)': { borderRight: theme => `1px solid ${theme.palette.divider}` }
              }
            }}
          >
            {shortcuts.map(shortcut => (
              <Grid
                item
                xs={6}
                key={shortcut.title}
                onClick={handleDropdownClose}
                sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'action.hover' } }}
              >
                <Box
                  component={Link}
                  href={shortcut.url}
                  sx={{
                    p: 6,
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    textDecoration: 'none',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Avatar sx={{ mb: 2, width: 48, height: 48 }}>
                    <Icon fontSize='1.5rem' icon={shortcut.icon} />
                  </Avatar>
                  <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>{shortcut.title}</Typography>
                  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                    {shortcut.subtitle}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </ScrollWrapper>
      </Menu>
    </Fragment>
  )
}

export default ShortcutsDropdown
