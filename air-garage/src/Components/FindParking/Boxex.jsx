import { Box, Heading, SimpleGrid ,Image,Text} from '@chakra-ui/react'
import React from 'react'
import ProductAddToCart from './Box'

export default function Boxex() {
    const data=[
        {
            img:"https://parking.airgarage.com/static/media/hollywood.3cda80f5.png",
            title:"Los Angles",
            text:"15 spots available"
        },
        {
            img:"https://parking.airgarage.com/static/media/omaha.47180892.png",
            title:"Omaha",
            text:"14 spots available"
        },
        {
            img:"https://parking.airgarage.com/static/media/a2.29e68f98.png",
            title:"Ann Arbor",
            text:"12 spots available"
            
        },
        {
            img:"https://parking.airgarage.com/static/media/cacti.0300cb19.png",
            title:"Tempe",
            text:"21 spots available"
        }
    ]
  return (
    <Box w={"75%"}   m="auto"     >
        <Box  as={"h2"} >Popular search</Box>
        <SimpleGrid   columns={[1,2,3,4]} gap="1rem" mt="8%"   >
      {
        data.map((elem,i)=>(
            <ProductAddToCart key={i+1} img={elem.img} title={elem.title} text={elem.text}      />
        ))
      }
       </SimpleGrid>

    </Box>
  )
}
