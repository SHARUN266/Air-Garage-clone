import { Flex, Box, Image, Text, useColorModeValue } from "@chakra-ui/react";

import swal from 'sweetalert';

function ProductAddToCart({img,text,title}) {
    function handleAlert(){
        swal("Oops!", "This service is not available on your location!", "error");
        console.log("first")
    }
  return (
    <Flex onClick={handleAlert} cursor={"pointer"}  w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={img}
          alt={`Picture of ${title}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              textAlign={"centre"}
              w="100%"
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            >
              {title}
            </Box>
          </Flex>

          <Flex  textAlign={"center"} justifyContent="space-between" alignContent="center">
            <Box  color={"gray"} textAlign={"center"} w="100%">
                {text}


            </Box>
            
                      </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;
