// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import RadioGroup from '@mui/material/RadioGroup'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import DialogTitle from '@mui/material/DialogTitle'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'

// ** Third Party Imports
import Payment from 'payment'
import Cards from 'react-credit-cards'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Styled Component Imports
import CardWrapper from 'src/@core/styles/libs/react-credit-cards'

// ** Util Import
import { formatCVC, formatExpirationDate, formatCreditCardNumber } from 'src/@core/utils/format'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

const CreditCardWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('xl')]: {
    '& > div:first-of-type': {
      marginBottom: theme.spacing(6)
    }
  },
  [theme.breakpoints.up('xl')]: {
    alignItems: 'center',
    flexDirection: 'row',
    '& > div:first-of-type': {
      marginRight: theme.spacing(6)
    }
  }
}))

const data = [
  {
    cardCvc: '587',
    name: 'Tom McBride',
    expiryDate: '12/24',
    imgAlt: 'Mastercard',
    badgeColor: 'primary',
    cardStatus: 'Primary',
    cardNumber: '5577 0000 5577 9865',
    imgSrc: '/images/logos/mastercard.png'
  },
  {
    cardCvc: '681',
    imgAlt: 'Visa card',
    expiryDate: '02/24',
    name: 'Mildred Wagner',
    cardNumber: '4532 3616 2070 5678',
    imgSrc: '/images/logos/visa.png'
  }
]

const PaymentMethodCard = () => {
  // ** States
  const [name, setName] = useState('')
  const [cvc, setCvc] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [focus, setFocus] = useState()
  const [expiry, setExpiry] = useState('')
  const [openEditCard, setOpenEditCard] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [selectedCard, setSelectedCard] = useState(null)

  const handleEditCardClickOpen = id => {
    setSelectedCard({
      cardId: id,
      focus: undefined,
      name: data[id].name,
      cvc: data[id].cardCvc,
      expiry: data[id].expiryDate,
      cardNumber: data[id].cardNumber
    })
    setOpenEditCard(true)
  }

  const handleEditCardClose = () => {
    setOpenEditCard(false)
    setTimeout(() => {
      setSelectedCard(null)
    }, 200)
  }
  const handleBlur = () => setFocus(undefined)
  const handleSelectedCardBlur = () => setFocus(undefined)

  const handleInputChange = ({ target }) => {
    if (target.name === 'cardNumber') {
      target.value = formatCreditCardNumber(target.value, Payment)
      setCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
      setExpiry(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value, cardNumber, Payment)
      setCvc(target.value)
    }
  }

  const handleInputChangeDialog = ({ target }) => {
    if (target.name === 'cardNumberDialog') {
      target.value = formatCreditCardNumber(target.value, Payment)
      setSelectedCard({ ...selectedCard, cardNumber: target.value })
    } else if (target.name === 'expiryDialog') {
      target.value = formatExpirationDate(target.value)
      setSelectedCard({ ...selectedCard, expiry: target.value })
    } else if (target.name === 'cvcDialog') {
      target.value = formatCVC(target.value, selectedCard.cardNumber, Payment)
      setSelectedCard({ ...selectedCard, cvc: target.value })
    }
  }

  const handleResetForm = () => {
    setCvc('')
    setName('')
    setExpiry('')
    setCardNumber('')
  }

  return (
    <>
      <Card>
        <CardHeader title='Payment Method' />
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <FormControl>
                    <RadioGroup
                      row
                      value={paymentMethod}
                      aria-label='payment method'
                      name='account-settings-billing-radio'
                      onChange={e => setPaymentMethod(e.target.value)}
                    >
                      <FormControlLabel
                        value='card'
                        control={<Radio />}
                        label='Credit/Debit/ATM Card'
                        sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                      />
                      <FormControlLabel
                        value='cod'
                        label='COD/Cheque'
                        control={<Radio />}
                        sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {paymentMethod === 'card' ? (
                  <>
                    <Grid item xs={12}>
                      <CreditCardWrapper>
                        <CardWrapper>
                          <Cards cvc={cvc} focused={focus} expiry={expiry} name={name} number={cardNumber} />
                        </CardWrapper>
                      </CreditCardWrapper>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <TextField
                          fullWidth
                          name='cardNumber'
                          value={cardNumber}
                          autoComplete='off'
                          label='Card Number'
                          onBlur={handleBlur}
                          onChange={handleInputChange}
                          placeholder='0000 0000 0000 0000'
                          onFocus={e => setFocus(e.target.name)}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name='name'
                        value={name}
                        autoComplete='off'
                        onBlur={handleBlur}
                        label='Name on Card'
                        placeholder='John Doe'
                        onChange={e => setName(e.target.value)}
                        onFocus={e => setFocus(e.target.name)}
                      />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <TextField
                        fullWidth
                        name='expiry'
                        label='Expiry'
                        value={expiry}
                        onBlur={handleBlur}
                        placeholder='MM/YY'
                        onChange={handleInputChange}
                        inputProps={{ maxLength: '5' }}
                        onFocus={e => setFocus(e.target.name)}
                      />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <TextField
                        fullWidth
                        name='cvc'
                        label='CVC'
                        value={cvc}
                        autoComplete='off'
                        onBlur={handleBlur}
                        onChange={handleInputChange}
                        onFocus={e => setFocus(e.target.name)}
                        placeholder={Payment.fns.cardType(cardNumber) === 'amex' ? '1234' : '123'}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Switch defaultChecked />}
                        label='Save Card for future billing?'
                        sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                      />
                    </Grid>
                  </>
                ) : null}
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography sx={{ mb: 4, fontWeight: 500 }}>My Cards</Typography>
              {data.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 4,
                    display: 'flex',
                    borderRadius: 1,
                    flexDirection: ['column', 'row'],
                    justifyContent: ['space-between'],
                    backgroundColor: 'action.hover',
                    alignItems: ['flex-start', 'center'],
                    mb: index !== data.length - 1 ? 4 : undefined
                  }}
                >
                  <div>
                    <img height='25' alt={item.imgAlt} src={item.imgSrc} />
                    <Box sx={{ mt: 4, mb: 2.5, display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ color: 'text.secondary' }}>{item.name}</Typography>
                      {item.cardStatus ? (
                        <CustomChip
                          rounded
                          skin='light'
                          size='small'
                          sx={{ ml: 2.5 }}
                          label={item.cardStatus}
                          color={item.badgeColor}
                        />
                      ) : null}
                    </Box>
                    <Typography sx={{ color: 'text.secondary' }}>
                      **** **** **** {item.cardNumber.substring(item.cardNumber.length - 4)}
                    </Typography>
                  </div>

                  <Box sx={{ mt: [4, 0], textAlign: ['start', 'end'] }}>
                    <Button variant='outlined' sx={{ mr: 2.5 }} onClick={() => handleEditCardClickOpen(index)}>
                      Edit
                    </Button>
                    <Button variant='outlined' color='secondary'>
                      Delete
                    </Button>
                    <Typography variant='body2' sx={{ mt: [6, 11] }}>
                      {`Card expires at ${item.expiryDate}`}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12}>
              <Button type='submit' variant='contained' sx={{ mr: 4 }}>
                Save Changes
              </Button>
              <Button type='reset' variant='outlined' color='secondary' onClick={handleResetForm}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Dialog
        open={openEditCard}
        onClose={handleEditCardClose}
        aria-labelledby='user-view-billing-edit-card'
        aria-describedby='user-view-billing-edit-card-description'
        sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
      >
        <DialogTitle
          id='user-view-billing-edit-card'
          sx={{
            textAlign: 'center',
            fontSize: '1.5rem !important',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          Edit Card
        </DialogTitle>
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(6)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
          }}
        >
          <DialogContentText
            variant='body2'
            id='user-view-billing-edit-card-description'
            sx={{ textAlign: 'center', mb: 7 }}
          >
            Edit your saved card details
          </DialogContentText>
          {selectedCard !== null && (
            <form>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <CardWrapper sx={{ '& .rccs': { m: '0 auto' } }}>
                    <Cards
                      cvc={selectedCard.cvc}
                      focused={selectedCard.focus}
                      expiry={selectedCard.expiry}
                      name={selectedCard.name}
                      number={selectedCard.cardNumber}
                    />
                  </CardWrapper>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={6}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        autoComplete='off'
                        label='Card Number'
                        name='cardNumberDialog'
                        onBlur={handleSelectedCardBlur}
                        onChange={handleInputChangeDialog}
                        placeholder='0000 0000 0000 0000'
                        defaultValue={selectedCard.cardNumber}
                        onFocus={e => setSelectedCard({ ...selectedCard, focus: e.target.name })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField
                        fullWidth
                        name='nameDialog'
                        autoComplete='off'
                        label='Name on Card'
                        placeholder='John Doe'
                        onBlur={handleSelectedCardBlur}
                        defaultValue={selectedCard.name}
                        onChange={e => setSelectedCard({ ...selectedCard, name: e.target.value })}
                        onFocus={e => setSelectedCard({ ...selectedCard, focus: e.target.name })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label='Expiry'
                        placeholder='MM/YY'
                        name='expiryDialog'
                        defaultValue={expiry}
                        onBlur={handleSelectedCardBlur}
                        inputProps={{ maxLength: '5' }}
                        onChange={handleInputChangeDialog}
                        onFocus={e => setSelectedCard({ ...selectedCard, focus: e.target.name })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <FormControl fullWidth>
                        <InputLabel id='user-view-billing-edit-card-status-label'>Card Status</InputLabel>
                        <Select
                          label='Card Status'
                          id='user-view-billing-edit-card-status'
                          labelId='user-view-billing-edit-card-status-label'
                          defaultValue={
                            data[selectedCard.cardId].cardStatus ? data[selectedCard.cardId].cardStatus : ''
                          }
                        >
                          <MenuItem value='Primary'>Primary</MenuItem>
                          <MenuItem value='Expired'>Expired</MenuItem>
                          <MenuItem value='Active'>Active</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label='CVC'
                        name='cvcDialog'
                        defaultValue={cvc}
                        autoComplete='off'
                        onBlur={handleSelectedCardBlur}
                        onChange={handleInputChangeDialog}
                        onFocus={e => setSelectedCard({ ...selectedCard, focus: e.target.name })}
                        placeholder={Payment.fns.cardType(selectedCard.cardNumber) === 'amex' ? '1234' : '123'}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Switch defaultChecked />}
                        label='Save Card for future billing?'
                        sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditCardClose}>
            Submit
          </Button>
          <Button variant='outlined' color='secondary' onClick={handleEditCardClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default PaymentMethodCard
