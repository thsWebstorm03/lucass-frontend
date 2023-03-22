// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { DataGrid } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: '1rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'secondary', icon: 'tabler:circle-check' },
  Paid: { color: 'success', icon: 'tabler:circle-half-2' },
  Draft: { color: 'primary', icon: 'tabler:device-floppy' },
  'Partial Payment': { color: 'warning', icon: 'tabler:chart-pie' },
  'Past Due': { color: 'error', icon: 'tabler:alert-circle' },
  Downloaded: { color: 'info', icon: 'tabler:arrow-down-circle' }
}

const columns = [
  {
    flex: 0.2,
    field: 'id',
    minWidth: 100,
    headerName: 'ID',
    renderCell: ({ row }) => <LinkStyled href={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</LinkStyled>
  },
  {
    flex: 0.15,
    minWidth: 80,
    field: 'invoiceStatus',
    renderHeader: () => <Icon icon='tabler:trending-up' fontSize='1.125rem' />,
    renderCell: ({ row }) => {
      const { dueDate, balance, invoiceStatus } = row
      const color = invoiceStatusObj[invoiceStatus] ? invoiceStatusObj[invoiceStatus].color : 'primary'

      return (
        <Tooltip
          title={
            <>
              <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
                {invoiceStatus}
              </Typography>
              <br />
              <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
                Balance:
              </Typography>{' '}
              {balance}
              <br />
              <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
                Due Date:
              </Typography>{' '}
              {dueDate}
            </>
          }
        >
          <CustomAvatar skin='light' color={color} sx={{ width: 30, height: 30 }}>
            <Icon icon={invoiceStatusObj[invoiceStatus].icon} />
          </CustomAvatar>
        </Tooltip>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 90,
    field: 'total',
    headerName: 'Total',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>${row.total || 0}</Typography>
  },
  {
    flex: 0.3,
    minWidth: 125,
    field: 'issuedDate',
    headerName: 'Issued Date',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.issuedDate}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 130,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title='Delete Invoice'>
          <IconButton size='small' sx={{ color: 'text.secondary' }}>
            <Icon icon='tabler:trash' />
          </IconButton>
        </Tooltip>
        <Tooltip title='View'>
          <IconButton
            size='small'
            component={Link}
            sx={{ color: 'text.secondary' }}
            href={`/apps/invoice/preview/${row.id}`}
          >
            <Icon icon='tabler:eye' />
          </IconButton>
        </Tooltip>
        <OptionsMenu
          iconButtonProps={{ size: 'small' }}
          menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
          options={[
            {
              text: 'Download',
              icon: <Icon icon='tabler:download' />
            },
            {
              text: 'Edit',
              href: `/apps/invoice/edit/${row.id}`,
              icon: <Icon icon='tabler:pencil' />
            },
            {
              text: 'Duplicate',
              icon: <Icon icon='tabler:copy' />
            }
          ]}
        />
      </Box>
    )
  }
]

const InvoiceListTable = ({ invoiceData }) => {
  // ** State
  const [pageSize, setPageSize] = useState(7)
  const [anchorEl, setAnchorEl] = useState(null)

  // ** Var
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card>
      <CardHeader
        title='Invoice List'
        sx={{ '& .MuiCardHeader-action': { m: 0 } }}
        action={
          <>
            <Button
              color='secondary'
              variant='outlined'
              aria-haspopup='true'
              onClick={handleClick}
              aria-expanded={open ? 'true' : undefined}
              endIcon={<Icon icon='tabler:chevron-down' />}
              aria-controls={open ? 'user-view-overview-export' : undefined}
            >
              Export
            </Button>
            <Menu open={open} anchorEl={anchorEl} onClose={handleClose} id='user-view-overview-export'>
              <MenuItem onClick={handleClose}>PDF</MenuItem>
              <MenuItem onClick={handleClose}>XLSX</MenuItem>
              <MenuItem onClick={handleClose}>CSV</MenuItem>
            </Menu>
          </>
        }
      />
      <DataGrid
        autoHeight
        rowHeight={54}
        columns={columns}
        rows={invoiceData}
        pageSize={pageSize}
        disableSelectionOnClick
        rowsPerPageOptions={[7, 10, 25, 50]}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
      />
    </Card>
  )
}

export default InvoiceListTable
