import { Box, Card, CardBody, Center, CardFooter, CardHeader, Heading, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { motion } from 'framer-motion';


interface Projeto {
  id: number;
  title: string;
  description: string;
  link: string;
}

const projetos: Projeto[] = [
  {
    id: 1,
    title: "Customer dashboard",
    description: "View a summary of all your customers over the last month.",
    link: "https://example.com",
  },
  {
    id: 2,
    title: "Project management",
    description: "Track and manage your team's projects in one place.",
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Task manager",
    description: "Organize your tasks and stay on top of your to-do list.",
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Task manager",
    description: "Organize your tasks and stay on top of your to-do list.",
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Task manager",
    description: "Organize your tasks and stay on top of your to-do list.",
    link: "https://example.com",
  },
];

const Projetos = () => {
  return (
    <Center>
  <Box m={12} mt='150px' w='6xl'>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Heading textAlign='center' fontWeight="bold" mb={10} as='h3' size='lg'>Projetos</Heading>
      <Card mt='80px' py={4} px={3} color='#f7fafc' bgGradient="linear(to-r, teal.500, cyan.400)"  borderRadius='3xl' boxShadow='md'>
        <CardBody >
        <SimpleGrid  spacing={3} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
  sx={{
    '@media screen and (max-width: 768px)': {
      display: 'block',
      '& > div': {
        marginBottom: '20px'
      }
    }
  }}>
  {projetos.map((projeto) => (
    <Card  bg='#f7fafc' key={projeto.id} boxShadow='sm'>
      <CardHeader>
        <Heading color='#1a202c' size='md'>{projeto.title}</Heading>
      </CardHeader>
      <CardBody >
        <Text color='#4a5568' >{projeto.description}</Text>
      </CardBody>
      <CardFooter>
        <Button color='#f7fafc' bg='#4a5568' _hover={{ bg: '#1a202c' }}>View here</Button>
      </CardFooter>
    </Card>
  ))}
</SimpleGrid>
        </CardBody>
      </Card>
    </motion.div>
  </Box>
</Center>
  );
};

export default Projetos;