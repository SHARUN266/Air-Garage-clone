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
import React from "react";

export default function RevenuePartner() {
  const image = [
    "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5ff4db28ba55b4f84383d98f_1200px-Starwood_Hotels_and_Resorts_logo.svg-p-500.png",
    "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a3a18e780fad25095c2c4_marriot-p-500.png",
    "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f173b38239bc4f42286ffab_hilton-p-500.png",
  ];
  return (
    <Flex
      
      m="auto"
      alignItems="center"
      p="2rem"
      h={"auto"}
      
      direction={{ base: "column", md: "row" }}
    >
      <Box m="auto"  w={{base:"100%",md:"200%"}} pr={"2rem"} h="350px"  >
        <Image
          h="100%"
          data-aos="fade-right"
          borderBottomRadius={"2%"}
          w="100%"
          src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60a6d928e7187f18da1ab8c1_color-garage-p-500.png"
          alt="revenue Partner Image"
        />
      </Box>
      <Box textAlign={"justify"} data-aos="fade-left"  >
        <Heading  fontWeight={600}  >Partner with AirGarage</Heading>
        <Text  mt="5%" color={"text"}>
          AirGarage is a full service parking operator. We handle all of the
          day-to-day logistics that go into making your parking lot or garage
          the most successful version of itself.
        </Text>
        <Text mt="3%" color={"text"}>
          We operate hundreds of parking lots and garages across the United
          States and Canada on behalf of landlords, property managers, and other
          real estate operators. Our focus is using technology to lower
          operational overhead and increase your net parking income.
        </Text>
        <Text fontWeight={700}>
          We're already maximizing returns for top-tier real estate owners
        </Text>
        <Flex gap={"1rem"}>
          {image.map((elem) => (
            <Image mt="5%" h="15%" w="15%" src={elem} alt="hotels" />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
