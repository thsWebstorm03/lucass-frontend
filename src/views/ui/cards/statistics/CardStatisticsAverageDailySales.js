// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const series = [{ data: [40, 20, 65, 50] }]

const CardStatisticsAverageDailySales = () => {
  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    grid: {
      show: false,
      padding: {
        bottom: 20
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0,
        opacityFrom: 1,
        shadeIntensity: 1,
        stops: [0, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.4,
              color: theme.palette.success.main
            },
            {
              opacity: 0,
              offset: 100,
              color: theme.palette.background.paper
            }
          ]
        ]
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 1,
        color: theme.palette.success.main
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardContent sx={{ pb: 0 }}>
        <Typography variant='h6' sx={{ mb: 2 }}>
          Average Daily Sales
        </Typography>
        <Typography variant='body2'>Total Sales This Month</Typography>
        <Typography variant='h5'>$28,450</Typography>
      </CardContent>
      <ReactApexcharts type='area' height={138} series={series} options={options} />
    </Card>
  )
}

export default CardStatisticsAverageDailySales
