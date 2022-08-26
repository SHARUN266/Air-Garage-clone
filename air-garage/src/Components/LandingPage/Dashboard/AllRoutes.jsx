import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dailyperformance from './Dailyperformance'
import Dashboard from './Dashboard'
import OnlineListing from './OnlineListing'

export default function AllRoutes1() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/dailyperformance" element={<Dailyperformance/>}/>
        <Route path="/onlinedailyreport" element={<OnlineListing/>}/>
    </Routes>
  )
}
