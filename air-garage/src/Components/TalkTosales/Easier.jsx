import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import FreeParkingAuditButton from "./FreeParkingAuditButton";

export default function Easier() {
  const list=[
    {
      img:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/614b8a4113cc716980de994d_growth-1.png",
      text:"No fees or expenses to get started"
    },
    {
      img:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ac207363f6b974468c3cab_pie.png",
      text:"Full transparency and real-time reporting"
    },
    {
      img:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2957e7c929611df3bb_secure.png",
      text:"Risk free - cancel in as little as two weeks"

    }
  ]
  return (
    <Flex
   
    
      h={["auto", "auto","auto", "50vh"]}
      w="100%"
      m="auto"
      justify={"space-between"}
      direction={["column", "row", "row"]}
     
    >
      <Box w={"90%"} data-aos="fade-up"  >
        <Box w="60%" textAlign={"justify"} m="auto">
         
          <Heading lineHeight={"60px"} fontWeight={400}>
            Choosing a parking operator has never been easier
          </Heading>
          {
            list.map((elem)=>(
              <Box mt="3%" fontSize={"20px"} display={"flex"} alignItems="center" gap={"2rem"}  >
          
              <Image h="3rem" src={elem.img}  alt="img"/>
              <Text fontWeight={100} color={"#222"}  >{elem.text}</Text>
             </Box>

            ))
          }
         <FreeParkingAuditButton />
        </Box>
       
      </Box>
      <Box  data-aos="fade-up"
     data-aos-duration="2000"  w="30%" m="auto" zIndex={1000} >
        <Image
          h="100%"
          w="100%"
          src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/62eac6bfa729856ef25484ca_garage-2-p-500.png"
          alt="image"
        />
      </Box>
    </Flex>
  );
}
