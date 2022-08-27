import { Box,Input } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faSearch} from "@fortawesome/fontawesome-svg-core"
import { FaSearch } from 'react-icons/fa'
import Logo from '../BasicComp/Logo'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
  
  <Box p="1rem"  w={"100%"}   >
    <Link  to="/">
    <Logo/>
    </Link>
  </Box>
   

    


   
  )
}
