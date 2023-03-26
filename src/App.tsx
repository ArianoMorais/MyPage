import { Box, ChakraProvider, Container, extendTheme, useColorMode } from "@chakra-ui/react";
import { Button, Flex, Heading, } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Nav from "./components/Header";
import Readme from "./components/Readme/Readme"
import Page1 from "./components/Body/Page1";
import Projetos from "./components/Projetos/Projetos"
import AnimatedBox from "./components/animation/AnimatedBox";
import Tecnologias from "./components/Tecnologias/Tecnologias";
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
    <ChakraProvider theme={theme}>
    <AnimatedBox>
      <Box>
        <Nav />
      </Box>
    </AnimatedBox>

    <AnimatedBox>
      <Box>
        <Page1 />
      </Box>
    </AnimatedBox>

    <AnimatedBox>
      <Box>
        <Readme />
      </Box>
    </AnimatedBox>

    <AnimatedBox>
      <Box>
        <Projetos />
      </Box>
    </AnimatedBox>

    <AnimatedBox>
      <Box>
        <Tecnologias/>
      </Box>
    </AnimatedBox>

  </ChakraProvider>
  );
}

export default App;