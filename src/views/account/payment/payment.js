// ** React Imports
import React, { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
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
import Icon from 'src/@core/components/icon'
import { Divider } from '@mui/material'

const PaymentsTable = () => {
   // ** States
   const createData = (name, calories, fat, carbs, protein) => {
      return { name, calories, fat, carbs, protein };
    }
    
    const rows = [
      createData('19', '19 March 2023 - 10:33 PM',	'PayPal',	'$20.00',	'Pending'),
      createData('18','19 March 2023 - 03:24 PM', 'PayPal',	'$10.00',	'Pending'),
    ];

   return (
      <Card>
         <CardHeader title='Payments' />
         <CardContent>
            <Divider className='mb-2'></Divider>
            <TableContainer component={Paper}>
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                     {rows.map((row) => (
                     <TableRow
                        key={row.name}
                        
                     >
                        <TableCell component="th" scope="row">
                           {row.name}
                        </TableCell>
                        <TableCell align="center">{row.calories}</TableCell>
                        <TableCell align="center">{row.fat}</TableCell>
                        <TableCell align="center">{row.carbs}</TableCell>
                        <TableCell align="center">{row.protein}</TableCell>
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
