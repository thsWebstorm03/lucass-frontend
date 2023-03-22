// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Component Import
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'

const CardStatsSquare = props => {
  // ** Props
  const { sx, icon, stats, title, iconSize = 24, avatarSize = 42, avatarColor = 'primary' } = props

  return (
    <Card sx={{ ...sx }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <CustomAvatar skin='light' color={avatarColor} sx={{ mb: 2, width: avatarSize, height: avatarSize }}>
          <Icon icon={icon} fontSize={iconSize} />
        </CustomAvatar>
        <Typography variant='h6' sx={{ mb: 2 }}>
          {stats}
        </Typography>
        <Typography variant='body2'>{title}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardStatsSquare
