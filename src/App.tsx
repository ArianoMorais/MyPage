import { ChakraProvider, Container, extendTheme, useColorMode } from "@chakra-ui/react";
import { Button, Flex, Heading, } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Nav from "./components/Header";
import Page1 from "./components/Body/Page1";
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#00050f",
    },
  },
});

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider  theme={theme}>
      <Container maxW="container.2xl" mt={3} >
        <Nav ></Nav>
      </Container >
      <Container maxW="container.2xl" >
        <Page1></Page1>
      </Container>
      
    </ChakraProvider>
  );
}

export default App;