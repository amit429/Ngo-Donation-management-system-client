import React from 'react'
import "./Navbar.css";
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
} from '@chakra-ui/react';
import logo from '../../assets/logo.png';
import {
    Link
} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Admin_navbar() {

    const navigate = useNavigate();

    const navItems = [{
            name: "Home",
            link: "/adminlanding"
        },

        {
            name: "NGO List",
            link: "/ngo_list"
        },

        {
            name: "Doner List",
            link: "/"
        },

        {
            name: "All Donations",
            link: "/doner_donation_table"
        },

        {
            name: "All Requests",
            link: "/"
        },
        
    ];

  return (
   <>
        <Box className="navbar_main">
        <Box className='nav-design'>
            <Box style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',

            }}>
                <img src={logo} alt='logo' width="140px" height="140px" 
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
                       
                        <Link to= "/logout">
                            <MenuItem  _hover={{bg: 'gray.400'}}>Logout</MenuItem>
                        </Link>
                    </MenuList>
                    </Menu>
                
                
            </HStack>
        </Box>
    </Box>
   
   </>
  )
}
