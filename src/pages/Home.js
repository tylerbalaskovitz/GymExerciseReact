import React, {useState} from 'react'
import { Box } from '@mui/material'
import Exercises from '../componenets/Exercises'
import SearchExercises from '../componenets/SearchExercises'
import HeroBanner from '../componenets/HeroBanner'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home