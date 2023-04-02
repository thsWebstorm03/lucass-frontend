import { useRouter } from 'next/router'

import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import {Divider} from '@mui/material'

const CardInfulencer = (props) => {
   const {_id, title, pathname, createdAt, questionlist, answerlist, tone, content} = props;
   
   const router = useRouter();

   const onClick = () => {
      console.log(router.pathname,'pathname')
      router.push({
         pathname : pathname,
         query : {
            pId : _id
         }
      })
   };
   
   return (
      <Card className='container'>
         <CardHeader title={title}
         subheader={createdAt}
         action={
            <Button type='button' variant='contained' size='large' onClick={onClick}>
               Create more content
            </Button>
          }
      />
         <Divider></Divider>
         <CardContent>
            {
               questionlist.length > 0 && answerlist.length > 0 && questionlist.map((item, index) => (
                  <span key={index}>
                     <p className='h6 mb-1'>{questionlist[index]}</p>
                     <p className='mb-4'><small>{answerlist[index]}</small></p>
                  </span>
               ))
            }

            <p className='h6 mb-1'>Tone</p>
            <p className='mb-4' style={{display : '-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden', textOverflow:'ellipsis'}}><small>{tone}</small></p>

            <p className='h6 mb-1'>Content</p>
            <p className='mb-4' style={{display : '-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden', textOverflow:'ellipsis'}}><small>{content}</small></p>
         </CardContent>
      </Card>
   )
}

export default CardInfulencer
