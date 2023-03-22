// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

const Teams = ({ data }) => {
  return (
    <Grid container spacing={6}>
      {data &&
        Array.isArray(data) &&
        data.map((item, index) => {
          return (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={item.avatar} sx={{ mr: 2.5, height: 38, width: 38 }} />
                      <Typography variant='h6'>{item.title}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton size='small' sx={{ color: 'text.disabled' }}>
                        <Icon fontSize='1.25rem' icon='tabler:star' />
                      </IconButton>
                      <OptionsMenu
                        iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
                        options={[
                          'Rename Team',
                          'View Details',
                          'Add to Favorites',
                          { divider: true, dividerProps: { sx: { my: theme => `${theme.spacing(2)} !important` } } },
                          { text: 'Delete Team', menuItemProps: { sx: { color: 'error.main' } } }
                        ]}
                      />
                    </Box>
                  </Box>
                  <Typography sx={{ my: 4, color: 'text.secondary' }}>{item.description}</Typography>
                  <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AvatarGroup className='pull-up' sx={{ alignItems: 'center' }}>
                        {item.avatarGroup.map((person, index) => {
                          return (
                            <Tooltip key={index} title={person.name}>
                              <Avatar src={person.avatar} alt={person.name} sx={{ height: 32, width: 32 }} />
                            </Tooltip>
                          )
                        })}
                        <Avatar color='secondary' sx={{ height: 32, width: 32, fontWeight: 500, fontSize: '0.75rem' }}>
                          +{item.extraMembers}
                        </Avatar>
                      </AvatarGroup>
                    </Box>
                    <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                      {item.chips &&
                        item.chips.map((chip, index) => (
                          <Box
                            href='/'
                            key={index}
                            component={Link}
                            onClick={e => e.preventDefault()}
                            sx={{
                              textDecoration: 'none',
                              '&:not(:last-of-type)': { mr: 2.5 },
                              '& .MuiChip-root': { cursor: 'pointer' }
                            }}
                          >
                            <CustomChip rounded size='small' skin='light' color={chip.color} label={chip.title} />
                          </Box>
                        ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Teams
