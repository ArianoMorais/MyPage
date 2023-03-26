import { ChakraProvider, Container, extendTheme, useColorMode, Text, Avatar, Grid,Box, Center } from "@chakra-ui/react";
import { Button, Flex, Heading, } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


function Page1() {
 

  return (
    <Center>
    <Box p={10} alignItems={'center'} mt={40} w='7xl' >
    <Flex flexDirection={{ base: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
      <Grid justifyContent="space-between">
        <Text
          as="h1"
          fontSize={{base: '40px', md: '40px', lg: '45px'}}
          fontWeight="bold"
          bgGradient="linear(to-r, teal.500, cyan.400)"
          bgClip="text"
        >
          Olá seja bem-vindo!
        </Text>

        <Text
          as="h1"
          fontSize={{base: '40px', md: '40px', lg: '45px'}}
          fontWeight="bold"
          bgGradient="linear(to-r, #6F062B, pink.600)"
          bgClip="text"
        >
          Este é meu site de apresentação
        </Text>
      </Grid>

      <Avatar
        src="https://avatars.githubusercontent.com/u/89952697?s=400&u=fdd7f233a4e2a4cd2c04d24bec1ed5272816f93b&v=4"
        w={{base: '300px', md: '300px', lg: '300px'}}
        h={{base: '300px', md: '300px', lg: '300px'}}
        mt={{ base: '150px', md: '0' }}
        bgGradient="linear(to-tr, blue.400,purple.500)"
        colorScheme="purple"
        borderColor="purple.200"
        borderWidth="2px"
      />
    </Flex>
  </Box>
  </Center>

  );
}

export default Page1;