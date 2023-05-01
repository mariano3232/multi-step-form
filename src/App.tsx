
import './App.css'
import Sidebar from './components/sidebar'
import PersonalInfo from './components/personalInfo'
import Plans from './components/plans'
import AddOns from './components/addOns'
import Summary from './components/summary'
import {Box} from '@mui/material'
import { useState } from 'react'

function App() {

  const [steps,setSteps]=useState([<PersonalInfo/>,<Plans/>,<AddOns/>,<Summary/>])

  const [currentStep,setCurrentStep]=useState(1)

  return (
    <div className="App">
      <Box sx={{
        display:'flex',
        width:'940px',
        height:'600px',
      }}>
        <Sidebar currentStep={currentStep} setCurrentStep={setCurrentStep}/>
        {
          steps.map((step,index)=>{
            if (index+1===currentStep){
              return step
            }
          })
        }
      </Box>
      <div>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Mariano Melendez</a>.
      </div>
    </div>
  )
}

export default App
