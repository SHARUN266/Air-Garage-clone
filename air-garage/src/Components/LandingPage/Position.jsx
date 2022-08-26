import { Box, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export default function Position() {
  const Cards = [
    {
      logo: "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f28039ee32a88bdfae6_cover.png",
      title: "Best-in-class Economics",
      text: "Increase Net Operating Income at your property by up to 50% vs other parking operators.",
    },
    {
      logo: "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2937a53c7a2bfb65b7_slider.png",
      title: "You're in Control",
      text: "Need to reserve spaces for customers or validate employee vehicles? Our system was built with multi-use cases in mind.",
    },
    {
      logo: "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2957e7c929611df3bb_secure.png",
      title: "Always On Enforcement",
      text: "AirGarage's proprietary network of enforcement officers scans day and night so you don't have to stress about violators.",
    },
  ];
  return (
    <Box data-aos="fade-up"  m="auto" alignItems="center" p="2rem" h={"auto"}>
      <Box textAlign={"justify"}  >
        <Heading>Our value proposition</Heading>
        <Text color="text" mt="3%" >
          We've built the operating system for parking management, infusing
          technology into every facet of the business.
        </Text>
      </Box>
      <SimpleGrid  columns={[1,1,3]} gap="2rem" mt="5%">
        {Cards.map((elem) => (
          <Box h="auto" mt={"10%"} p="1rem" id="hover">
            <Image
              width={"59px"}
              loading="lazy"
              src={elem.logo}
            />
            <Text mt="10%" fontWeight={800}> {elem.title}  </Text>
            <Text color={"text"} mt="14%" textAlign="justify">
              {elem.text}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
