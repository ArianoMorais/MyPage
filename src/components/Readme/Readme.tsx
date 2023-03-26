import { ReactNode } from 'react';
import {
 Card,
 CardBody,
 Text,
 Box,
 Center,
 Heading
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


function Readme() {
    
    return(
      <Center>
  <Box m={12} mt='150px' w='5xl'>
    <Heading textAlign='center' fontWeight="bold" mb={10} as='h4' size='lg'>Sobre mim</Heading>
    <Card mt='80px' color='#f7fafc' bgGradient="linear(to-r, teal.500, cyan.400)" borderRadius='3xl'>
      <CardBody p={10}>
        <Text
          fontWeight="bold"
          color='#f7fafc'
          textAlign='justify'
          lineHeight='taller'
          fontSize='xl'
        >
          Sou um desenvolvedor Full-Stack apaixonado por tecnologia e inovação. Com 3 anos de experiência, busco sempre me atualizar e aprimorar meus conhecimentos em tecnologias como TypeScript, .NET, C#, Node, Vue, React, SQL e JavaScript.
        </Text>
      </CardBody>
    </Card>
  </Box>
</Center> 
      
        
    );
  
 
}

export default Readme;