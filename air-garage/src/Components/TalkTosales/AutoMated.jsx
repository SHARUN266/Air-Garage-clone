import { Box, Flex, Heading, Image,Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../BasicComp/Logo";

export default function AutoMated() {
  return (
 
      <Flex w="100%" h={['auto','auto','80vh']} m="auto" mb="8%" bg="#222" borderBottom={"3px solid orange"}  justify={"space-between"} alignItems="center"  direction={['column', 'column','row']}>
        
        <Box h={"98%"}   >
            <Box textAlign={"justify"}  m="auto" w="40%"  data-aos="fade-up"
       data-aos-duration="2000" >
        <Box  mt="2%"  >
          
          <Link  to="/">
        <Logo  />
        </Link>
        </Box >
          <Heading mt="30%" fontFamily={"'Louis george cafe', sans-serif;"} lineHeight={"60px"} color={"white"} fontWeight={200}  >Automated, transparent parking management</Heading>
        <Link to="/findparking">  <Button data-aos="fade-up"  data-aos-duration="3000" mt="15%" fontSize={"14px"} fontWeight={200} _hover="none"  bg="color" color={"white"} p="0rem 2rem"  >GET FREE PARKING AUDIT</Button></Link>
          <Image mt="15%" src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/62eac88a544a95aa599fba34_ratings-2-p-500.png"/>
          </Box>
        </Box>
        <Box  data-aos="fade-up"
     data-aos-duration="2000"  w={['100%','100%','40%']} mt="10%"   >
          <Image
          h="100%"
          w="100%"
            src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/62eac05575f75fbd765956a9_garage-1-a-p-800.png"
            alt="img"
          />
      
        </Box>
      </Flex>

  );
}
