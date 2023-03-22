// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const OptionsWrapper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const EditActions = ({ id, toggleSendInvoiceDrawer, toggleAddPaymentDrawer }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Button fullWidth variant='contained' onClick={toggleSendInvoiceDrawer} sx={{ mb: 2, '& svg': { mr: 2 } }}>
              <Icon fontSize='1.125rem' icon='tabler:send' />
              Send Invoice
            </Button>
            <Box sx={{ mb: 2, gap: 4, display: 'flex', alignItems: 'center' }}>
              <Button
                fullWidth
                component={Link}
                color='secondary'
                variant='outlined'
                href={`/apps/invoice/preview/${id}`}
              >
                Preview
              </Button>
              <Button fullWidth color='secondary' variant='outlined'>
                Save
              </Button>
            </Box>
            <Button fullWidth variant='contained' sx={{ '& svg': { mr: 2 } }} onClick={toggleAddPaymentDrawer}>
              <Icon fontSize='1.125rem' icon='tabler:currency-dollar' />
              Add Payment
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth sx={{ mb: 4 }}>
          <InputLabel id='payment-select'>Accept payments via</InputLabel>
          <Select fullWidth labelId='payment-select' label='Accept payments via' defaultValue='Internet Banking'>
            <MenuItem value='Internet Banking'>Internet Banking</MenuItem>
            <MenuItem value='Debit Card'>Debit Card</MenuItem>
            <MenuItem value='Credit Card'>Credit Card</MenuItem>
            <MenuItem value='Paypal'>Paypal</MenuItem>
            <MenuItem value='UPI Transfer'>UPI Transfer</MenuItem>
          </Select>
        </FormControl>
        <OptionsWrapper>
          <InputLabel sx={{ cursor: 'pointer' }} htmlFor='invoice-edit-payment-terms'>
            Payment Terms
          </InputLabel>
          <Switch defaultChecked id='invoice-edit-payment-terms' />
        </OptionsWrapper>
        <OptionsWrapper>
          <InputLabel sx={{ cursor: 'pointer' }} htmlFor='invoice-edit-client-notes'>
            Client Notes
          </InputLabel>
          <Switch id='invoice-edit-client-notes' />
        </OptionsWrapper>
        <OptionsWrapper>
          <InputLabel sx={{ cursor: 'pointer' }} htmlFor='invoice-edit-payment-stub'>
            Payment Stub
          </InputLabel>
          <Switch id='invoice-edit-payment-stub' />
        </OptionsWrapper>
      </Grid>
    </Grid>
  )
}

export default EditActions
