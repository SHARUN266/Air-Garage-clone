import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dailyperformance from './Dailyperformance'
import Dashboard from './Dashboard'
import OnlineListing from './OnlineListing'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dailyperformance" element={<Dailyperformance/>}/>
        <Route path="/onlinedailyreport" element={<OnlineListing/>}/>
    </Routes>
  )
}
