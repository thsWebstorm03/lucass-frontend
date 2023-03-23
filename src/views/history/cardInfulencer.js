// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import {Divider} from '@mui/material'

const CardInfluencer = (props) => {
   return (
      <Card className='container'>
         <CardHeader title={props.title}
         subheader={props.subtitle}
         action={
            <Button type='button' variant='contained' size='large'>
               Create more content
            </Button>
          }
      />
         <Divider></Divider>
         <CardContent>
            <p className='h6 mb-1'>Describe your product</p>
            <p className='mb-4'><small>Aftermarket wheels made with the highest quality materials. Ready to burn rubber on the track</small></p>

            <p className='h6 mb-1'>What's your product called?</p>
            <p className='mb-4'><small>Gram Lights</small></p>
            
            <p className='h6 mb-1'>Tone</p>
            <p className='mb-4'><small>Friendly</small></p>

            <p className='h6 mb-1'>Content</p>
            <p className='mb-4' style={{display : '-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden', textOverflow:'ellipsis'}}><small>Introducing the ultimate set of aftermarket wheels, designed to take your ride to the next level. Our Gram Lights wheels are made with the highest quality materials, ensuring top-notch performance and durability. Whether you're looking to burn rubber on the track or turn heads on the street, these wheels are the perfect upgrade for your vehicle.
               Crafted with precision and care, our Gram Lights wheels offer a unique blend of style and substance. With their sleek design and stunning finish, they add a touch of class and sophistication to any car. But it's not just about looks – these wheels are built to perform.
               Thanks to their cutting-edge construction, our Gram Lights wheels are engineered to handle the toughest conditions. From high-speed track days to winding mountain roads, they offer unparalleled grip and stability, giving you the confidence to take on any challenge. And with their light weight and advanced design, they're sure to enhance your car's agility and responsiveness, making every drive a thrill ride.
               So why settle for ordinary wheels when you can upgrade to the best? With our Gram Lights wheels, you'll enjoy superior performance, unmatched style, and unbeatable quality. Don't wait – order your set today and discover the difference that premium aftermarket wheels can make!</small></p>
         </CardContent>
      </Card>
   )
}

export default CardInfluencer
