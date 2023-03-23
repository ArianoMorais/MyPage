import { ChakraProvider, Container, extendTheme, useColorMode, Text, Avatar, Grid,Box, Center } from "@chakra-ui/react";
import { Button, Flex, Heading, } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


function Page1() {
 

  return (
    <Center>
  <Box  maxW="container.2xl">
    <Flex flexDirection="row" justifyContent="space-between" alignItems="center">
      <Grid>
        <Text
          as="h1"
          fontSize="40px"
          fontWeight="bold"
          bgGradient="linear(to-r, blue.600, pink.600)"
          bgClip="text"
        >
          Olá seja bem-vindo!
        </Text>

        <Text
          as="h1"
          fontSize="40px"
          fontWeight="bold"
          bgGradient="linear(to-r, #6F062B, pink.600)"
          bgClip="text"
        >
          Este é meu site de apresentação
        </Text>
      </Grid>

      <Avatar
        src="https://avatars.githubusercontent.com/u/89952697?s=400&u=fdd7f233a4e2a4cd2c04d24bec1ed5272816f93b&v=4"
        size="20px"
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