import React from 'react'
import { Box,Typography,Switch } from '@mui/material'
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'

const plans=[
  {
    name:'Arcade',
    icon:arcadeIcon,
    monthlyPrice:9,
    yearlyPrice:90,
  },
  {
    name:'Advanced',
    icon:advancedIcon,
    monthlyPrice:12,
    yearlyPrice:120,
  },
  {
    name:'Pro',
    icon:proIcon,
    monthlyPrice:15,
    yearlyPrice:150,
  }
]

export default function Plans() {
  return (
    <Box>
        <Typography variant='h4' sx={{color:'denim'}}>Select your plan</Typography>
        <Typography>You have the option to monthly or yearly billing.</Typography>
        <Box sx={{
          display:'flex',
          flexDirection:'row',
        }}>
          {
            plans.map(plan=>{
              return(
                <Box sx={{
                  border:'1px solid black',
                }}>
                  <Box component="img" src={plan.icon} alt="icono del plan" />
                    <Typography>{plan.name}</Typography>
                    <Typography>{plan.monthlyPrice}</Typography>
                  </Box>
              )
            })
          }
          <Switch/>
        </Box>
    </Box>
  )
}
