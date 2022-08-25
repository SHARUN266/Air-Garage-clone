import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SplitScreen from '../BasicComp/Login'
import LandingPage from '../LandingPage/LandingPage'
import PrivateRoute from '../Private/PrivateRoute'
import TalkToSales from '../TalkToSales'

export default function AllRoute() {
  return (
   <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/login" element={<SplitScreen/>}/>
    <Route path="/talktosales" element={
    
    
    <PrivateRoute>
    <TalkToSales/>
    </PrivateRoute>
    }/>
   </Routes>
  )
}
