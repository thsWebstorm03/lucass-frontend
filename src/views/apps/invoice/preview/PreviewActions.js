// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const PreviewActions = ({ id, toggleSendInvoiceDrawer, toggleAddPaymentDrawer }) => {
  return (
    <Card>
      <CardContent>
        <Button fullWidth variant='contained' onClick={toggleSendInvoiceDrawer} sx={{ mb: 2, '& svg': { mr: 2 } }}>
          <Icon fontSize='1.125rem' icon='tabler:send' />
          Send Invoice
        </Button>
        <Button fullWidth sx={{ mb: 2 }} color='secondary' variant='outlined'>
          Download
        </Button>
        <Button
          fullWidth
          sx={{ mb: 2 }}
          target='_blank'
          component={Link}
          color='secondary'
          variant='outlined'
          href={`/apps/invoice/print/${id}`}
        >
          Print
        </Button>
        <Button
          fullWidth
          sx={{ mb: 2 }}
          component={Link}
          color='secondary'
          variant='outlined'
          href={`/apps/invoice/edit/${id}`}
        >
          Edit Invoice
        </Button>
        <Button fullWidth variant='contained' sx={{ '& svg': { mr: 2 } }} onClick={toggleAddPaymentDrawer}>
          <Icon fontSize='1.125rem' icon='tabler:currency-dollar' />
          Add Payment
        </Button>
      </CardContent>
    </Card>
  )
}

export default PreviewActions
