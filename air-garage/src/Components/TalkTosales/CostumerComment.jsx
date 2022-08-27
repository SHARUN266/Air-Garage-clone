import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SocialProfileSimple from './CostumerCard'

export default function CostumerComment() {
    const data=[
        {
            img:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d8e78061a29dc28ac3a433a_port3.jpeg",
            from:"Owner of Springhill Hotel",
            comment:"Since our garage was always the cheapest, we needed a system that could offer dynamic pricing. We were operationalized in less than two weeks by the team. On day 1, we saw the impact of AirGarage",
            name:"- Allen S",
           
        },
        {
           img:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/630423dbac4ebc3a106b4949_josh.png",
           from:"SVP of Asset Management",
           comment:"Security and data are the first criteria we checked before determining whether this is a profitable decision. The AirGarage team demonstrated each one of these criteria for our asset management group.",
           name :"- Josh Z",

        },
        {
            img:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/6304238f92519c6707c9277a_close-up-young-businessman%201.png",
            from:"Owner of 4 Parking Garages in Florida",
            comment:"Our previous two operators lacked the ability to market our 4 parking facilities. The other lots in the area were always filled as opposed to ours. That’s how we found AirGarage.",
            name:"- Ali M"
        }
    ]
    const [userData,setUserData]=useState(data)
  return (
    <Box h={["auto","auto","80vh"]} bg="gray.200" >
        <SimpleGrid  w={["100%","100%","75%"]} gap="2rem" m="auto" columns={[1,2,3]}   >
        {
            userData.map((elem)=>(
                <SocialProfileSimple img={elem.img} comment={elem.comment} from={elem.from} name={elem.name}  />
            ))
        }
  </SimpleGrid>
    </Box>
  )
}
