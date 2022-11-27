import { Box, VStack,Text, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import about_img from '../../assets/about-image.png'
import React from 'react'
import './About.css'

export default function About() {
  return (
    <>
       <Box className='about'>
           <Box className='about-image'>
                <img src={about_img} alt="about-img" />
           </Box>

            <Box className='about-desc'>
                    <Box>
                        <Text style={{
                            fontSize: '2.3rem',
                            fontWeight: '700',
                            textAlign: 'left',
                            color:  "white",
                        }}>
                            About Us
                        </Text>
                    </Box>

                    <Box>
                        <Text style={{
                            fontSize: '0.9rem',
                            fontFamily: 'inherit',
                            fontWeight: '500',
                            textAlign: 'left',
                            marginTop: '1rem',
                            color:  "#3C4048",
                            lineHeight: '1.5rem',
                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

                        </Text>
                    </Box>

                    <Box>
                        <Button rightIcon={<ArrowForwardIcon/>} colorScheme='pink' variant='solid' style={{
                            marginTop: '1.5rem',
                        }}>
                            Read More
                        </Button>
                    </Box>
            </Box>
       </Box>
    
    </>
  )
}
