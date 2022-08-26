import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SocialProfileSimple({img,from,comment,name}) {
    return (
      <Center py={6}  mt="5%"  >
      
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              img
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            
          />
         
          <Text fontWeight={100} fontSize={"14px"} color={'black'} mb={4}>
            {from}
          </Text>
          <Text
          fontWeight={600}
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
           {comment}
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              {name}
            </Badge>
           
          </Stack>
  
          <Stack mt={8} direction={'row'} spacing={4}>
           <Image w="40%" m="auto" src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/62f3db9b01f8f1b91cec08ec_stars-orange.png"/>
          </Stack>
        </Box>
      </Center>
    );
  }