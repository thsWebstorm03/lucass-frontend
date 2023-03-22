// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import Select from '@mui/material/Select'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

const data = [
  {
    isSelected: true,
    value: 'percentage',
    title: 'Percentage',
    content: 'Create a deal which offer uses some % off (i.e 5% OFF) on total.'
  },
  {
    value: 'flat-amount',
    title: 'Flat Amount',
    content: 'Create a deal which offer uses flat $ off (i.e $5 OFF) on the total.'
  },
  {
    value: 'prime-member',
    title: 'Prime Member',
    content: 'Create prime member only deal to encourage the prime members.'
  }
]
const regionArray = ['Asia', 'Europe', 'Africa', 'Australia', 'North America', 'South America']

const ImgWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 4, 0, 4)
  },
  [theme.breakpoints.up('sm')]: {
    height: 250,
    padding: theme.spacing(5, 5, 0, 5)
  },
  '& img': {
    height: 'auto',
    maxWidth: '100%'
  }
}))

const StepDealType = () => {
  const initialIconSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1]
    .value

  // ** States
  const [region, setRegion] = useState([])
  const [selectedRadio, setSelectedRadio] = useState(initialIconSelected)

  // ** Hook
  const theme = useTheme()

  const icons = [
    {
      icon: 'tabler:discount-check',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'tabler:credit-card',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'tabler:diamond',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    }
  ]

  const handleChange = event => {
    const {
      target: { value }
    } = event
    setRegion(typeof value === 'string' ? value.split(',') : value)
  }

  const handleRadioChange = prop => {
    if (typeof prop === 'string') {
      setSelectedRadio(prop)
    } else {
      setSelectedRadio(prop.target.value)
    }
  }

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <ImgWrapper>
          <img width={650} alt='illustration' src={`/images/pages/create-deal-type-${theme.palette.mode}.png`} />
        </ImgWrapper>
      </Grid>
      {data.map((item, index) => (
        <CustomRadioIcons
          key={index}
          data={data[index]}
          icon={icons[index].icon}
          selected={selectedRadio}
          name='custom-radios-deal'
          gridProps={{ sm: 4, xs: 12 }}
          handleChange={handleRadioChange}
          iconProps={icons[index].iconProps}
        />
      ))}
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <TextField type='number' label='Discount' placeholder='25' />
          <FormHelperText>Enter the discount percentage. 10 = 10%</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id='select-region'>Region</InputLabel>
          <Select
            multiple
            value={region}
            labelId='select-region'
            onChange={handleChange}
            input={<OutlinedInput label='Region' />}
            renderValue={selected => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {selected.map(value => (
                  <CustomChip rounded key={value} label={value} skin='light' />
                ))}
              </Box>
            )}
          >
            {regionArray.map(reg => (
              <MenuItem key={reg} value={reg}>
                {reg}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Select applicable regions for the deal.</FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default StepDealType
