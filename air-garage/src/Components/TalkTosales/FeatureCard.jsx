import { Box, Flex,Heading,Image,SimpleGrid,Text } from '@chakra-ui/react'
import React from 'react'
import FeatureComp from './FeatureComp'
import FreeParkingAuditButton from './FreeParkingAuditButton'

export default function FeatureCard() {
    const data=[
        {
            img:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/62eb06c28ab042132991bb48_iphone-map-p-500.png",
            title:`  No fees,
            No setup costs `,
            text:"No upfront cost and fully covered property maintenance, AirGarage reduces operational cost from day one."

        },
        {
            img:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/62eb073fcc1f8c8ddddecf10_enforce-camera-p-500.png",

            title:"Fully managed and maintained with one system",
            text:"We handle payments, hardware, listing directories, marketing, and day-to-day maintenance."
        }
    ]
  return (
    <Box   h="auto" p="3rem" bg="gray.200" >
      <SimpleGrid w={"60%"} m="auto"  >
        {
            data.map((elem)=>(
                <FeatureComp title={elem.title} text={elem.text} img={elem.img}   />
            ))
        }
      
        </SimpleGrid>  
      
        
    </Box>
  )
}
