import { Avatar, Box, Button, Center, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, MenuDivider, Link, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { HiOutlineCog, HiOutlineLogout } from 'react-icons/hi';
import { ReactNode } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center>
      <Box
        w="8xl"
        mt={25}
        borderRadius="3xl"
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow="lg"
        p={4}
      >
        <Flex justify="space-between" alignItems="center">
          <Box marginRight="auto" fontWeight="bold" fontSize="2xl">
            Ariano Morais
          </Box>

          <Menu>
            <MenuButton
              as={IconButton}
              icon={
                <Avatar
                  size="sm"
                  src="https://avatars.githubusercontent.com/u/89952697?s=400&u=fdd7f233a4e2a4cd2c04d24bec1ed5272816f93b&v=4"
                  
                />
              }
              variant="unstyled"
              aria-label="User Options"
              mr={2}
            />

            <MenuList minWidth="150px">
              <Center>
                <Avatar
                  size="2xl"
                  src="https://avatars.githubusercontent.com/u/89952697?s=400&u=fdd7f233a4e2a4cd2c04d24bec1ed5272816f93b&v=4"
                 
                />
              </Center>

              <Box px={3} py={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Ariano Morais
                </Text>
                <Text fontSize="md" color="gray.600">
                  ariano.morais@gmail.com
                </Text>
              </Box>

              <MenuDivider />

              <MenuItem
                icon={<HiOutlineCog />}
                minH="48px"
                onClick={() => console.log('Account Settings')}
              >
                Account Settings
              </MenuItem>
              <MenuItem
                icon={<HiOutlineLogout />}
                minH="48px"
                onClick={() => console.log('Logout')}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>

          <Button onClick={toggleColorMode} variant="ghost">
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}