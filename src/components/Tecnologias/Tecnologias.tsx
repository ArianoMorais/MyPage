import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaJs, FaMicrosoft, FaReact, FaNodeJs } from "react-icons/fa";

interface TecnologiasProps {
  /* Adicione props aqui, se necessário */
}

const Tecnologias: React.FC<TecnologiasProps> = () => {
  return (
    <Center>
      <Box m={12} mt="150px" w="6xl">
        <Heading textAlign="center" fontWeight="bold" mb={20} as="h3" size="lg">
          Tecnologias
        </Heading>
        <SimpleGrid
          spacing={10}
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          justifyItems="center"
          css={{
            "@media (max-width: 768px)": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <Box justifyContent='center' >
            <FaJs size={48} />
            <Heading size="md" mt={4} mb={2}>
              JavaScript
            </Heading>
          </Box>
          <Box >
            <FaMicrosoft size={48} />
            <Heading size="md" mt={4} mb={2}>
              .NET
            </Heading>
           
          </Box>
          <Box >
            <FaReact size={48} />
            <Heading size="md" mt={4} mb={2}>
              React
            </Heading>
      
          </Box>
          <Box >
            <FaNodeJs size={48} />
            <Heading size="md" mt={4} mb={2}>
              Node.js
            </Heading>
          </Box>
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default Tecnologias;