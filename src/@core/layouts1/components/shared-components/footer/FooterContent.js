// ** MUI Imports
import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Made with `}
        <Box component='span' sx={{ color: 'error.main' }}>
          ❤️
        </Box>
        {` by `}
        <MuiLink target='_blank' href='https://pixinvent.com'>
          Pixinvent
        </MuiLink>
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <MuiLink target='_blank' href='https://themeforest.net/licenses/standard'>
            License
          </MuiLink>
          <MuiLink target='_blank' href='https://1.envato.market/pixinvent_portfolio'>
            More Themes
          </MuiLink>
          <MuiLink target='_blank' href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation'>
            Documentation
          </MuiLink>
          <MuiLink target='_blank' href='https://pixinvent.ticksy.com'>
            Support
          </MuiLink>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
