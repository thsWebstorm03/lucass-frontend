// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const SendInvoiceDrawer = ({ open, toggle }) => {
  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={toggle}
      sx={{ '& .MuiDrawer-paper': { width: [300, 400] } }}
      ModalProps={{ keepMounted: true }}
    >
      <Header>
        <Typography variant='h6'>Send Invoice</Typography>
        <IconButton size='small' onClick={toggle}>
          <Icon icon='tabler:x' fontSize='1.25rem' />
        </IconButton>
      </Header>
      <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
        <FormControl fullWidth sx={{ mb: 5 }}>
          <TextField type='email' label='From' variant='outlined' defaultValue='shelbyComapny@email.com' />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 5 }}>
          <TextField type='email' label='To' variant='outlined' defaultValue='qConsolidated@email.com' />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 5 }}>
          <TextField label='Subject' variant='outlined' defaultValue='Invoice of purchased Admin Templates' />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 5 }}>
          <TextField
            rows={10}
            multiline
            label='Message'
            type='textarea'
            variant='outlined'
            defaultValue={`Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019`}
          />
        </FormControl>
        <Box sx={{ mb: 6 }}>
          <CustomChip
            rounded
            size='small'
            skin='light'
            color='primary'
            label='Invoice Attached'
            icon={<Icon icon='tabler:link' fontSize='1.25rem' />}
          />
        </Box>
        <div>
          <Button variant='contained' onClick={toggle} sx={{ mr: 4 }}>
            Send
          </Button>
          <Button variant='outlined' color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </div>
      </Box>
    </Drawer>
  )
}

export default SendInvoiceDrawer
