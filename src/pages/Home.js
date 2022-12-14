import React, {useState} from 'react'
import { Box } from '@mui/material'
import Exercises from '../componenets/Exercises'
import SearchExercises from '../componenets/SearchExercises'
import HeroBanner from '../componenets/HeroBanner'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart} />
      <Exercises 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}/>
    </Box>
  )
}

export default Home