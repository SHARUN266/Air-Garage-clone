import { Box, Button, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import AllRoutes1 from './AllRoutes'

export default function Main() {
    const Links=[
        {
            link:"/",
            title:"Dashboard"
        },
        {
            link:"/dailyperformance",
            title:"Daily Performance"


        },
        {
            link:"/onlinedailyreport",
            title: "Online Listing Aggregation"
        }
       
        
       
    ]
    let activeStyle = {
        background: "#e1e5eb",
        borderRadius:"5px"
      };
    
      let activeClassName = "underline";
  return (
    <Box data-aos="fade-up">
        <Flex w="100%" >
          {
            Links.map((elem)=>(
                <NavLink  style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } to={elem.link}> <Button  _hover={"none"} bg="none" fontWeight={200} >  {elem.title}</Button> </NavLink>
            ))
          }
        </Flex>
        <AllRoutes1/>
    </Box>
  )
}
