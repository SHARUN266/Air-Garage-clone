import { Box } from '@chakra-ui/react'
import React from 'react'
import AutoMated from './AutoMated'
import SmallWithSocial from './BasicFooter'
import CostumerComment from './CostumerComment'
import Easier from './Easier'
import FeatureCard from './FeatureCard'
import FoamBox from './Foarm/FoamBox'
import GifVideo from './GifVideo'
import HotelList from './HotelList'

export default function MainComp() {
  return (
    <Box>
        <AutoMated/>
        <HotelList/>
        <Easier/>
        <FoamBox/>
        <FeatureCard/>
        <GifVideo/>
        
        <CostumerComment/>
        
       <SmallWithSocial/> 

    </Box>
  )
}
