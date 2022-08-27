import { Button, Heading,Text,Box,Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function TalkToSales() {
  return (
    <Box   alignItems="center" p="2rem"  h={"auto"}   >
        <Box  m="auto" w={"27%"}   >
            <Image h="100%" w={"100%"} src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ba98799d47da0806a85703_ag.png"/>
            
        </Box>
        <Stack gap={"1rem"} alignItems="center"  >
        <Heading   >Parking Operations for the 21st Century</Heading>
        <Text    fontFamily={"'Louis george cafe', sans-serif;"} fontSize="18px" >AirGarage modernizes parking assets with one streamlined service covering enforcement, payment collection, maintenance and more.</Text>
        <Link  to="/talktosales">
        <Button  h={{base:"auto",md:"4rem"}} p="1rem 2rem " fontWeight={400} bg="bg" color={"color"} fontSize="auto" _hover={"none"}  >TALK TO SALES</Button></Link>
        </Stack>
    </Box>
  )
}
