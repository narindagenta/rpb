import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Image, Button, ChakraProvider } from '@chakra-ui/react';
import { Heading, Box, Container, Flex} from "@chakra-ui/layout";
import { Select }  from "@chakra-ui/select";

export default function Filter() {
    return (
      <ChakraProvider>
        <Flex>
            {/* <Container mx='auto' maxW='container.xl'>
            <Heading 
            color="black.700"
            margin="5"
            fontSize='5xl'
            fontWeight='extrabold'>
                RPB STORE Catalogue */}
            {/* </Heading>
            </Container> */}
        </Flex>
{/* 
        <Box w="full" zIndex="9" position="auto" top="8">
            <Container  maxW='container.2xl' mx='auto'>
            <Box p="2" 
            // bgGradient='linear(to-l, #7928CA, #FF0080)' 
            bg = 'grey'
            borderRadius="lg" shadow="md">
            <Flex justify='space-between'>
                    <Flex gridGap='4'justify='space-between'>
                    <Box w='150px'>
                        <Select placeholder='PDL' bg="white">
                            <option value='Baju'>Baju</option>
                            <option value='Celana'>Celana</option>
                            <option value='Sepatu'>Sepatu</option>
                            <option value='Topi'>Topi</option>                            
                        </Select>
                    </Box>

                    <Box w='150px'>
                        <Select placeholder='PDH' bg="white">
                            <option value='Baju'>Baju</option>
                            <option value='Celana'>Celana</option>
                            <option value='Sepatu'>Sepatu</option>
                            <option value='Topi'>Topi</option>        
                        </Select>
                    </Box>

                    <Box w='150px'>
                        <Select placeholder='PDU' bg="white">
                            <option value='Baju'>Baju</option>
                            <option value='Celana'>Celana</option>
                            <option value='Sepatu'>Sepatu</option>
                            <option value='Topi'>Topi</option>        
                        </Select>
                    </Box>

                    <Box w='150px'>
                        <Select placeholder='Lainnya' bg="white">
                            <option value='SetelanBajuAngkatan'>Baju Angkatan</option>
                            <option value='Setelan Oraum'>Seragam Oraum</option>
                            <option value='Monogram'>Monogram</option>
                            <option value='Tag Nama'>Tag Nama</option>
                            <option value='Brivet'>Brivet</option>
                        </Select>
                    </Box>
                    
                    </Flex>

                    <Box>
                        <Button colorScheme="white">My Order</Button>
                    </Box>
                </Flex>
            </Box>

            <Box maxW="420px" bg="white" p='6'>
            <image
                src='https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/19/643216cc-d9bc-4eb8-8649-767edbc2da2e.jpg'
                alt="Svartifoss Waterfall"
                borderRadius="xl"
                objectFit='cover'
                mx='auto'
            />
            </Box> */}
{/* 
            </Container>
        </Box> */}
      </ChakraProvider>
    )
  }