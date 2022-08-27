import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import FreeParkingAuditButton from "./FreeParkingAuditButton";

export default function FeatureComp({ img,title,text }) {
  return (
    <Center py={6}    data-aos="dade-up"        >
      <Stack
        borderWidth="1px"
        borderRadius="xl"
        w={{ sm: "100%", md: "100%" }}
        height={{ sm: "auto", md: "25rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex w={["100%", "100%", "35%"]} h={["50%", "50%", "auto"]} m="auto">
          <Image w="90%" m="auto" src={img} />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {title}
          </Heading>
         
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
            fontWeight={100}
          >
           {text}
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            
          </Stack>

          <Stack
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <FreeParkingAuditButton />
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
