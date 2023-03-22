import React, { useState } from 'react'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'
import HorizontalNavItems from 'src/@core/layouts/components/horizontal/navigation/HorizontalNavItems'

import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MuiMenu from '@mui/material/Menu'
import MuiMenuItem from '@mui/material/MenuItem'
import MenuCustomized from 'src/views/components/menu/MenuCustomized'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// Styled Menu component
const Menu = styled(MuiMenu)(({ theme }) => ({
  '& .MuiMenu-paper': {
    border: `1px solid ${theme.palette.divider}`
  }
}))

// Styled MenuItem component
const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  margin: 0,
  borderRadius: 0,
  '&:not(.Mui-focusVisible):hover': {
    backgroundColor: theme.palette.action.hover
  },
  '&.Mui-selected': {
    backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08)
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.palette.primary.main,
    '& .MuiListItemIcon-root, & .MuiTypography-root': {
      color: theme.palette.common.white
    }
  }
}))

import { Grid } from '@mui/material'

const Profile = props => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(true)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Grid container>
      <Grid item sm={5} md={3} lg={2} xl={2} xxl={2}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img src='/images/logos/seeds-logo.png' />
        </Box>
      </Grid>
      <Grid item sm={0} md={18} lg={18} xl={18} xxl={18}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <MenuCustomized />
        </Box>
      </Grid>
      <Grid item sm={0} md={3} lg={4} xl={4} xxl={4}></Grid>
    </Grid>
  )
}

export default Profile
