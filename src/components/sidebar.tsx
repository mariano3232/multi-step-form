import React, { useState } from 'react'
import bg from '../assets/images/bg-sidebar-desktop.svg'
import {Box,Typography,Button} from '@mui/material'

interface SidebarProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function Sidebar({currentStep,setCurrentStep}:SidebarProps) {

  let [steps,setSteps] = useState(['YOUR INFO','SELECT PLAN','ADD-ONS','SUMMARY'])
  console.log('currentStep :',currentStep)
  return (
    <Box sx={{
      backgroundImage: `url(${bg})`,
      width:"274px",
      height:"568px",
    }}>
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        gap:'20px',
        padding:'30px'
      }}>
      {
        steps.map((step,index)=>{
          return (
            <Box sx={{
              display:'flex',
              flexDirection:'row',
              gap:'20px',
            }}>
                <Button sx={{
                  maxWidth: '33px',
                  minWidth: '33px',
                  color:'white',
                  border:'1px solid white',
                  borderRadius:'50%',
                  height:'33px',
                }}
                onClick={()=>setCurrentStep(index+1)}
                >
                  {index+1}
                </Button>
                <Box>
                  <Typography sx={{color:'lightBlue',fontSize:'10px'}}>STEP {index+1}</Typography>
                  <Typography sx={{color:'white', fontSize:'13px', fontWeight:'bold'}}>{step}</Typography>
                </Box>
            </Box>
          )
        })
      }
      </Box>
    </Box>
  )
}
