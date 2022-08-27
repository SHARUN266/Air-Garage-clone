import { Box } from '@chakra-ui/react'
import React from 'react'
import SmallWithSocial from './Basic'
import Boxex from './Boxex'
import Navbar from './Navbar'
import Search from './Search'

export default function FindParkingMain() {
  return (
   <Box>
    <Navbar/>
    <Search/>
    <Boxex/>
    <SmallWithSocial/>
   </Box>
  )
}
