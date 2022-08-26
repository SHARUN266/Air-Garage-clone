import { Box } from '@chakra-ui/react'
import React from 'react'
import DemoFoam from './DemoFoam'
import OwnerCommnentBox from './OwnerCommnentBox'

export default function FoamBox() {
  return (
    <Box h="250vh" w={"100%"} bg="#222" mt="2%"  >
        <OwnerCommnentBox/>
        <DemoFoam/>

    </Box>
  )
}
