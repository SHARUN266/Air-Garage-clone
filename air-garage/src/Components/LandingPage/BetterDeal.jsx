import { Heading ,Text,Box} from '@chakra-ui/react'
import React from 'react'

export default function BetterDeal() {
  return (
    <Box data-aos="fade-up" id="deal"     >
        <Heading>Get better deal today!</Heading>
        <Text lineHeight={"10"} color={"text"}  >Send us your parking management contract and get a counter offer in 24 hours</Text>
    </Box>
  )
}
