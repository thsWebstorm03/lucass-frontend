// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiListSubheader from '@mui/material/ListSubheader'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import Translations from 'src/layouts/components/Translations'
import CanViewNavSectionTitle from 'src/layouts/components/acl/CanViewNavSectionTitle'

// ** Styled Components
const ListSubheader = styled(props => <MuiListSubheader component='li' {...props} />)(({ theme }) => ({
  lineHeight: 1,
  display: 'flex',
  position: 'static',
  marginTop: theme.spacing(3.5),
  paddingTop: theme.spacing(1.5),
  backgroundColor: 'transparent',
  paddingBottom: theme.spacing(1.5),
  transition: 'padding-left .25s ease-in-out'
}))

const TypographyHeaderText = styled(Typography)({
  fontSize: '0.75rem',
  lineHeight: 'normal',
  letterSpacing: '0.21px',
  textTransform: 'uppercase'
})

const VerticalNavSectionTitle = props => {
  // ** Props
  const { item, navHover, settings, collapsedNavWidth, navigationBorderWidth } = props

  // ** Vars
  const { mode, navCollapsed } = settings

  return (
    <CanViewNavSectionTitle navTitle={item}>
      <ListSubheader
        className='nav-section-title'
        sx={{
          ...(navCollapsed && !navHover
            ? { py: 0.5, px: (collapsedNavWidth - navigationBorderWidth - 22) / 8 }
            : { px: 7.5 }),
          '& .MuiTypography-root, & svg': {
            color: theme => (mode === 'semi-dark' ? `rgba(${theme.palette.customColors.dark}, 0.38)` : 'text.disabled')
          }
        }}
      >
        {navCollapsed && !navHover ? (
          <Icon icon='tabler:separator' />
        ) : (
          <TypographyHeaderText noWrap>
            <Translations text={item.sectionTitle} />
          </TypographyHeaderText>
        )}
      </ListSubheader>
    </CanViewNavSectionTitle>
  )
}

export default VerticalNavSectionTitle
