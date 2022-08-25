import { Box, Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'

export default function NetRevenue() {
  return (
    <Box   m="auto"  alignItems="center" p="2rem"  h={"auto"}   >
        <Box textAlign={"justify"}>
            <Heading>Increase Your Net Revenue</Heading>
            <Text mt="3%" color={"text"}>Our proprietary technology enables us to offer lower operating costs to our partners meaning they take home up to 50% more every month than when they worked with our competition.</Text>
        </Box>
        <Box  mt="3%"  >
            <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/619bf3a972f16c08c2a24729_stack-ag-p-1600.png" alt="netRevenueImage"/>
        </Box>
    </Box>
  )
}
