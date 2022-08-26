import { Box, Heading, SimpleGrid,Text ,Image} from '@chakra-ui/react'
import React from 'react'

export default function Card() {
    const card=[
        {
            img:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad7c7bc5cb09481db5a7b3_Image%20from%20iOS%20(4)-p-1080.jpeg",
            title:"Increase Parking Revenue",
            text:"Other parking operators nickel and dime owners by passing through every cost of their operation from uniforms to phone bills. AirGarage operates on a revenue share model so that we only make money if you do."
        },
        {
            img:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad7c7bb4dc18e48c224f8e_Image%20from%20iOS%20(5)-p-800.jpeg",
            title:"Multifaceted Enforcement",
            text:"The combined power of AirGarage's network of enforcement officers and our Automatic License Plate Recognition cameras means no illegally parked vehicle will slip through the cracks unnoticed."
        }
    ]
  return (
    <SimpleGrid data-aos="flip-left" m="7% 0% 7% 0%" gap={"2rem"}  columns={[1,1,2]}>
        {
            card.map((elem)=>(
                <Box   >
                <Image borderBottomRadius={"10px"} src={elem.img}  />
                <Box mt="5%" textAlign={"justify"}      >
                <Heading>{elem.title}</Heading>
                <Text mt="3%" color={"text"}   >{elem.text}</Text>
                </Box>
            </Box>

            ))
        }
       
    </SimpleGrid>
  )
}
