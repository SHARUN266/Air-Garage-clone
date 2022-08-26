import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";

export default function TransparentData() {
    const Cards = [
        {
          logo: "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ac207311fbe70d9afcad50_bar.png",
          title: "Reporting & Analytics",
          text: "Forecast occupancy and maximize your revenue with transparent data.",
        },
        {
            logo: "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ac207363f6b974468c3cab_pie.png",
            title: "Historical trends",
            text: "View your property's performance over time and track its progress.",
          },
          {
            logo: "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ac20734d588b250051fd79_fast.png",
            title: "Real-time updates",
            text: "Your dashboard updates with each parking rental as it happens. No more waiting for end of month reports.",
          },
      
    ]
  return (
    <Box data-aos="fade-up" m="auto" alignItems="center" p="2rem" h={"auto"}>
    <Box textAlign={"justify"} >
      <Heading>Our value proposition</Heading>
      <Text color="text" mt="3%" >
        We've built the operating system for parking management, infusing
        technology into every facet of the business.
      </Text>
    </Box>
    <SimpleGrid  columns={[1,1,3]} gap="2rem" mt="5%">
      {Cards.map((elem) => (
        <Box h="auto" mt={"10%"} p="1rem" id="hover" textAlign={"justify"}>
          <Image
            width={"59px"}
            loading="lazy"
            src={elem.logo}
          />
          <Text mt="10%" fontWeight={800}> {elem.title}  </Text>
          <Text color={"text"} mt="14%" textAlign={["center",'justify']}>
            {elem.text}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
  )
}
