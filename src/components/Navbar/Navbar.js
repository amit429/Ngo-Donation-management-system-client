import React from "react";
import {
  Button,
  Box,
  Text,
  Flex,
  Spacer,
  HStack,
  MenuList,
  MenuItem,
  MenuDivider,
  Menu,
  MenuButton,
  Avatar,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  IconButton,
} from "@chakra-ui/react";

import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "NGOs",
      path: "/ngo",
    },

    {
      name: "Favourites",
      path: "/",
    },

    {
      name: "Requests",
      path: "/requestview",
    },

    {
      name: "Events",
      path: "/",
    },
  ];

  return (
    <>
      <Box
        bg={useColorModeValue("white", "primary.300")}
        px={4}
        style={{
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",

          "@media (max-width: 768px)": {
            width: "100%",
          },
        }}
        width="100%"
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ base: "flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg="blue.900"
            alignItems={"center"}
            justifyContent={"center"}
            h={9}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              display={{ md: "flex" }}
                alignItems={"center"}
              style={{
                cursor: "pointer",
                justifyContent: "center",
              }}
            >
              <img src={logo} alt="Logo" width="100px" height="100px"
                onClick={() => navigate('/')}
              />

                <Text display={{ base: "none", md: "flex" }} dis style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif',
                    cursor: 'pointer',   
                }}
                    onClick={() => navigate('/')}
                >Helping - Hands</Text>
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              color="black"
              p={10}
            >
              {navItems.map((link) => (
                <Button
                  variant={"ghost"}
                  _hover={{
                    color: "black",
                    bg: "blue.400",
                  }}
                  as={Link}
                  to={link.path}
                >
                  <Link
                    _hover={{
                      textDecoration: "none",
                    }}
                    p={5}
                    fontSize={"lg"}
                    to={link.path}
                    key={link.name}
                  >
                    {link.name}
                  </Link>
                </Button>
              ))}
              <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => navigate('/doner_donation_table')}
                >My Donations</MenuItem>
                <MenuItem
                  onClick={() => navigate('/doner_profile')}
                >My Profile</MenuItem>
                <MenuItem
                  onClick={() => navigate('/logout')}
                >Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
            </HStack>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Drawer
              onClose={onClose}
              isOpen={isOpen}
              size={"xs"}
              placement="left"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                  <img src={logo} alt="Logo" width="190px" />
                </DrawerHeader>
                <DrawerBody>
                  <Stack as={"nav"} spacing={4} color="black">
                    {navItems.map((link) => (
                      <Link to={link.path} key={link.name} onClick={onClose}>
                        {link.name}
                      </Link>
                    ))}
                    <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => navigate('/doner_donation_table')}
                >My Donations</MenuItem>
                <MenuItem
                  onClick={() => navigate('/doner_profile')}
                >My Profile</MenuItem>
                <MenuItem
                  onClick={() => navigate('/logout')}
                >Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        ) : null}
      </Box>

      
      {/* <Box className="navbar_main">
        <Box className='nav-design'>
            <Box style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',

            }}>
                <img src={logo} alt='logo' width="150px" height="150px" 
                    onClick={() => navigate('/')}
                />
                <Text style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif',
                    cursor: 'pointer',   
                }}
                    onClick={() => navigate('/')}
                >Helping - Hands</Text>
            </Box>
        </Box>

        <Box className='navbar'>
            <HStack spacing="40px">

                {navItems.map((item) => (

                    <Button 
                        className='nav-box' 
                        colorScheme='#1D2D50' 
                        color='blackAlpha'
                        variant='ghost'
                    >
                         <Link to={item.link} className='nav-text'>{item.name}</Link>
                    </Button>

                ))}

                    <Menu>
                    <MenuButton>
                        <Avatar bg='teal.500' size="sm" />
                    </MenuButton>
                    <MenuList bg="gray.100">
                        <MenuItem 
                            _hover={{bg: 'gray.400'}}
                        >
                            Profile
                        </MenuItem>
                        
                        <Link to="/doner_donation_table">
                            <MenuItem  _hover={{bg: 'gray.400'}}>Donations & Volunteering</MenuItem>
                        </Link>
                       
                        <Link to= "/logout">
                            <MenuItem  _hover={{bg: 'gray.400'}}>Logout</MenuItem>
                        </Link>
                    </MenuList>
                    </Menu>
                
                
            </HStack>
        </Box>
    </Box> */}
    </>
  );
}
