import { useRouter } from 'next/router'

import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import {Divider, Grid} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import { deletelog } from 'src/store/apps/history'
import { useDispatch } from 'react-redux'

const CardInfulencer = (props) => {
   const {_id, title, pathname, createdAt, questionlist, answerlist, tone, content} = props;
   
   const router = useRouter();
   const dispatch = useDispatch();

   const onClick = () => {
      console.log(router.pathname,'pathname')
      router.push({
         pathname : pathname,
         query : {
            pId : _id
         }
      })
   };
   
   const deleteHistory = (e, id) => {
      if(confirm("Do you really delete this log?")){
         dispatch(deletelog(id));
      }
   }


   return (
      <Card className='container'>
         <CardContent className='pt-0'>
            <Grid container display={'flex'} justifyContent={'flex-end'}>
               <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={(e) => deleteHistory(e, _id)} >
                  <Icon fontSize='1.5rem' icon='tabler:circle-x' />
               </IconButton>
            </Grid>
            <Grid container>
               <Grid item xs={12} sm={6} md={6} lg={8} xl={9}>
                  <Typography variant='h6'>{title}</Typography>
                  <span style={{boxSizing : "border-box", display : "inline-block", color : "#AAAAAA", marginBottom : "10px"}}>{createdAt}</span>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                  
                  <Button type='button' fullWidth variant='contained' size='large' onClick={onClick}>
                     Create more content
                  </Button>
               </Grid>
            </Grid>
            
            
            <Divider className='mt-3 mb-3'></Divider>
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
