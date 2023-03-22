// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'

const data = [
  {
    amount: 75,
    title: 'Wallet',
    subtitle: 'Starbucks',
    amountDiff: 'negative',
    avatarColor: 'primary',
    avatarIcon: 'tabler:wallet'
  },
  {
    amount: 480,
    subtitle: 'Add Money',
    title: 'Bank Transfer',
    avatarColor: 'success',
    avatarIcon: 'tabler:browser-check'
  },
  {
    amount: 268,
    title: 'PayPal',
    avatarColor: 'error',
    subtitle: 'Client Payment',
    avatarIcon: 'tabler:brand-paypal'
  },
  {
    amount: 699,
    title: 'Master Card',
    amountDiff: 'negative',
    avatarColor: 'secondary',
    subtitle: 'Ordered iPhone 13',
    avatarIcon: 'tabler:credit-card'
  },
  {
    amount: 98,
    subtitle: 'Refund',
    avatarColor: 'info',
    title: 'Bank Transaction',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    amount: 126,
    title: 'PayPal',
    avatarColor: 'error',
    subtitle: 'Client Payment',
    avatarIcon: 'tabler:brand-paypal'
  },
  {
    amount: 1290,
    title: 'Bank Transfer',
    amountDiff: 'negative',
    avatarColor: 'success',
    subtitle: 'Pay Office Rent',
    avatarIcon: 'tabler:browser-check'
  }
]

const CardTransactions = () => {
  return (
    <Card>
      <CardHeader
        title='Transactions'
        subheader='Total 58 transaction done in month'
        subheaderTypographyProps={{ sx: { mt: '0 !important' } }}
        action={
          <OptionsMenu
            options={['Refresh', 'Show all entries', 'Make payment']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <CardContent>
        {data.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== data.length - 1 ? 3.75 : undefined
              }}
            >
              <CustomAvatar
                skin='light'
                variant='rounded'
                color={item.avatarColor}
                sx={{ mr: 4, width: 34, height: 34 }}
              >
                <Icon icon={item.avatarIcon} />
              </CustomAvatar>
              <Box
                sx={{
                  rowGap: 1,
                  columnGap: 4,
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography sx={{ fontWeight: 500 }}>{item.title}</Typography>
                  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Typography
                  sx={{ fontWeight: 500, color: item.amountDiff === 'negative' ? 'error.main' : 'success.main' }}
                >
                  {`${item.amountDiff === 'negative' ? '-' : '+'}$${item.amount}`}
                </Typography>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CardTransactions
