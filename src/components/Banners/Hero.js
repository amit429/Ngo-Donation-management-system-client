import React from 'react'
import "./Hero.css"
import {
    Box,
    Text,
    Button,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Hero_img from '../../assets/Hero-image.png'

export default function Hero() {

    const navigate = useNavigate();
  return (
    <>
        <Box className='main'>
            <Box className='desc'>
                <VStack>
                    
                     <Text style={{
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        fontFamily: 'sans-serif',
                        marginLeft: '-12rem',
                    }}>
                        Welcome to the <span style={{color: '#E7AB79'}}>Helping - Hands</span>
                    </Text>

                    <Text style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        fontFamily: 'sans-serif',
                        textAlign: 'left',
                    }}>
                        Make someone's life better with a little contribution
                    </Text>

                    <Text style={{
                        fontSize: '0.8rem',
                        fontFamily: "inherit",
                        textAlign: 'left',
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Text>
                    <Box className='buttons'>
                        <HStack spacing={19} >
                            <Button colorScheme='pink' variant='solid' style={{
                                marginLeft: '-10rem',
                            }}
                            onClick={() => {
                                navigate('/ngo');
                            }}
                            >
                                Make a Donation
                            </Button>

                            <Button colorScheme='green'>
                                Volunteer for a Cause
                            </Button>
                        </HStack>
                    </Box>
                </VStack>
            </Box>
            <Box className='img'>
                <img src={Hero_img} alt='hero-img' width="600px" height="1000px" />
            </Box>
        </Box>
    </>
  )
}
