import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LargeWithLogoCentered from '../BasicComp/Footer'
import SplitScreen from '../BasicComp/Login'
import Nav from '../BasicComp/Navbar'
import LandingPage from '../LandingPage/LandingPage'
import PrivateRoute from '../Private/PrivateRoute'

import MainComp from '../TalkTosales/MainComp'

export default function AllRoute() {
  return (
   <Routes>
    <Route path="/" element={
    <Box>
      <Nav/>
    <LandingPage/>
    <LargeWithLogoCentered/>
    </Box>
    }/>
    <Route path="/login" element={<SplitScreen/>}/>
    <Route path="/talktosales" element={
    
    
    <PrivateRoute>
    <MainComp/>
    </PrivateRoute>
    }/>
   </Routes>
  )
}
