import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Spacer,
  Container,
  border,
} from "@chakra-ui/react";

export default function PartnerSpotlight() {
  return (
    <Flex
      m="auto"
      alignItems="center"
      p="2rem"
      h={"auto"}
      direction={{ base: "column", md: "row" }}
    >
      <Box textAlign={"justify"}>
        <Heading fontWeight={600}>Partner Spotlight</Heading>
        <Text mt="5%">
          TRANSFORMING AN OUTDATED OPERATION TO A MODERN SYSTEM
        </Text>
        <Text mt="3%" color={"text"}>
          After a long vetting process, learn why this organization chose
          AirGarage to bring together the previous fractured pieces of their
          parking system.
        </Text>
      </Box>
      
      <Box m="auto" w={{ base: "100%", md: "100%" }} pr={"2rem"} >
        <Image
        id="deal"
        pl="2rem"
          h="100%"
          mt="12%"
          borderBottomRadius={"2%"}
          w="100%"
          src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60a6e0cbe639633bbd39e7c2_garage-case.png"
          alt="revenue Partner Image"
        />
      </Box>
    </Flex>
  );
}
