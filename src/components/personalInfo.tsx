import React from 'react'
import { Box,Typography,TextField,InputLabel } from '@mui/material'
import boldUbuntu from '../assets/fonts/Ubuntu-Bold.ttf'

export default function PersonalInfo() {
  return (
    <Box sx={{
      bgColor:'grey',
      width:'450px',
      height:'372px',
      border:'1px solid black',
      margin:'60px',
      }}>
        <Typography sx={{
          fontFamily:'Ubuntu',
          fontWeight:'700',
          fontSize:'32px',
          lineHeight:'37px',
          color:'#022959'
        }}>
          Personal info
        </Typography>
        <Typography>Please provide your name,email adress,and phone number</Typography>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            gap:'30px',
            padding:0,
        }}> 
            <InputLabel>Name</InputLabel>
            <TextField placeholder='e.g. Stephen King'/>
            <InputLabel>Email Adress</InputLabel>
            <TextField placeholder='e.g. stephenking@loren.com'/>
            <InputLabel>Phone Number</InputLabel>
            <TextField placeholder='e.g. +1 234 567 890'/>
        </Box>
    </Box>
  )
}
