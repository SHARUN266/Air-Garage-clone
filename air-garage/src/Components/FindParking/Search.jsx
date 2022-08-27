import { Box, Button, Heading,Input,Select,Text } from '@chakra-ui/react'
import React from 'react'

export default function Search() {
  return (
    <Box w="65%" m="auto" mt="5%" >
        <Heading   fontWeight={400}  >Find parking</Heading>
        <Text   fontWeight={100}  >100s of spots available near you.</Text>
        <Box display={"flex"}  h="20vh"  textAlign="justify" alignItems={"center"} justifyContent="space-between" direction={["row","column","column"]}   mt="5%">
            <Box    >
                <Heading fontSize={"20px"}   fontWeight={400}   >LOCATION</Heading>
                <Input mt="5%" w={"25rem"} bg={"#f7f7f7"}  type={"address"} placeholder="Enter an address"/>
            </Box>
            <Box>
                <Heading fontSize={"20px"}    fontWeight={400}  >TYPE </Heading>
                <Select   mt="8%" w={"15rem"}   >
                    <option value="Hourly">Hourly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Airport">Airport</option>
                </Select>
            </Box>
            <Box>
                <Button p="1rem 5rem " mt="22%" _hover={"none"} bg="bg" fontWeight={200} color={"color"}   >SEARCH</Button>
            </Box>
        </Box>
    </Box>
  )
}
