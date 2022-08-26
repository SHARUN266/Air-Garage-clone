import { Box, Flex, Heading ,Text,Image} from "@chakra-ui/react";
import React from "react";

export default function OwnerCommnentBox() {
    const count=[
        {
            num:"+1M",
            item:"Cars parked"
        },
        {
            num:"+30%",
            item:"Average revenue uplift"
        },
        {
            num:"+20k",
            item:"Spots under management"
        }
    ]
  return (
    <Box data-aos="fade-up" color={"white"} textAlign="justify" h="50%" w="60%" m="auto"  border={"2px solid #222"}  >
      <Box  mt="10%"  >
        <Heading  fontSize={"5xl"} fontWeight={400}  >Join in on something big</Heading>
        <Box display="flex"  alignItems="center" justifyContent={"space-between"} mt="10%"  >
            {
                count.map((elem)=>(
                    <Box>
            <Heading fontSize={"5xl"} fontWeight={400} >{elem.num}</Heading>
            <Text  color={"text"} fontSize="xl"  >{elem.item}</Text>
          </Box>

                ))
            }
          
         
        
      </Box>
      </Box>
      <Flex direction={["column","column","row"]} justify="space-between" mt="15%"  >
        <Box w="60%" >
            <Text fontWeight={100} fontSize={"30px"}  color={"text"} >  <Text color={"white"}>"</Text>  
            AirGarage reduced our OpEx since they took over management.  Transparency and communication from their operations team has been amazing!
            </Text>
            <Text mt="5%" fontSize={"20px"}  fontWeight={100}  >VP of Property Assests</Text>
            <Text   color={"text"}  >Leo T.</Text>
        </Box>
        <Image h="162px" w="162px" src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/62eaca643d0ec50e37257f1d_leo-p-500.png" alt="image"/>

      </Flex>
    </Box>
  );
}
