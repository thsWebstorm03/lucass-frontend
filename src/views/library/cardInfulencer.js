// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Link from 'next/link'

const CardInfluencer = (props) => {
   const {section, title, description, path} = props;
   
   return (
      <Card sx={{p:2}} style={{minHeight : "260px"}}>
         <CardHeader title={title} subheader={section}/>
         <CardContent>
            <Typography variant='body2' fontSize={16} sx={{
               mb: 2
            }}>
               {description}
            </Typography>
            
         </CardContent>
         <CardActions className='card-action-dense'>
            <Link href={path} className='ps-2'>Try now</Link>
         </CardActions>
      </Card>
   )
}

export default CardInfluencer
