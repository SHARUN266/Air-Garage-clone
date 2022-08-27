import {
    Button,
    Checkbox,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Text,
    background
  } from '@chakra-ui/react';
  import React from 'react'
  import swal from "sweetalert";
  
  export default function DemoFoam() {
    const handleAudit=()=>{
     
      swal("Thanks for register here we will connect you soon!", "", "success",{
        button:"Ok",
       
      });
      
    }
    return (
      <Stack data-aos="fade-up" minH={'40%'} w="60%" direction={{ base: 'column', md: 'row' }}  color="white"  m="auto" >
        <Flex  p={8} flex={1} align={'center'} justify={'center'} >
          <Stack   spacing={4} w={'90%'} gap={"2rem"} >
            <Box   >
            <Text  color={"text"}  >TRY AIRGARAGE</Text>
            <Heading fontSize={'4xl'} mt="2%" fontWeight={400}>Talk to a parking expert</Heading>
            <Text  mt="2%" color={"text"}  >Learn how AirGarage can work for you.</Text>
            </Box>
            <FormControl >
              <FormLabel>YOUR NAME</FormLabel>
              <Input id="inpuBoxHeight" type="name" placeholder='Enter name' />
            </FormControl>
            <FormControl id="password">
              <FormLabel>BUSINESS EMAIL</FormLabel>
              <Input id="inpuBoxHeight" type="email" placeholder='Enter e-mail' />
            </FormControl>
            <FormControl id="password">
              <FormLabel>PHONE</FormLabel>
              <Input id="inpuBoxHeight" type="number" placeholder='415-521-9999' />
            </FormControl>
            <FormControl id="password">
              <FormLabel>LOCATION</FormLabel>
              <Input id="inpuBoxHeight" type="address" placeholder='Enter address' />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                
                
                
              </Stack>
              <Button onClick={handleAudit} color={"black"} bg={"white"}  variant={'solid'}  h="4rem" >
                Get A Free Parking Audit
              </Button>
              <Text  color={"text"}  >We won't spam you, we promise.</Text>
            </Stack>
          </Stack>
        </Flex>
        
        
      </Stack>
    );
  }