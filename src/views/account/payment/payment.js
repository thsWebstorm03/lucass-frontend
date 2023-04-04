import {useState, createContext, useEffect} from 'react'
import axios from 'axios'

import toast from 'react-hot-toast'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// ** Icon Imports
import isEmpty from 'src/helper/is-empty'
import Icon from 'src/@core/components/icon'
import {Divider} from '@mui/material'
import {BASE_URL} from 'src/configs'

const PaymentsTable = () => {
   
   const [rows, setRows] = useState([]);

   useEffect(() => {
      axios
         .get(BASE_URL + '/api/payments/getlogs')
         .then(response => {
            setRows(response.data.logs);
         })
         .catch(err => console.log("error"))
      ;

   },[])

   return (
      <Card>
         <CardHeader title='Payments'/>
         <CardContent>
            <Divider className='mb-2'></Divider>
            <TableContainer component={Paper}>
               <Table
                  sx={{
                  minWidth: 650
               }}
                  aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Payment Method</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Status</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {!isEmpty(rows) && rows.map((row, index) => (
                        <TableRow key={row._id}>
                           <TableCell component="th" scope="row">
                              {index + 1}
                           </TableCell>
                           <TableCell align="center">{row.startAt}</TableCell>
                           <TableCell align="center">{row.paymethod}</TableCell>
                           <TableCell align="center">{row.amount}</TableCell>
                           <TableCell align="center">{row.status}</TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </CardContent>
      </Card>
   )

}

export default PaymentsTable
