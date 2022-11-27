import React from 'react'
import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import logo from '../../assets/logo.png'


export default function Footer() {
  return (
    <>
    <Box
        marginTop={10}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Box style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-20px'
          }}>
            <Image src={logo} alt="logo" 
                width="150px" height="150px" 
            />
          </Box>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Healing - Hands. All rights reserved</Text>

          <Stack direction={'row'} spacing={6}>
            <Box>
                <IconButton colorScheme="orange" as={Link} href={'#'} size={'sm'} fontSize={'lg'} icon={<FaInstagram/>} aria-label={'Instagram'}/>
            </Box>

            <Box>
                <IconButton colorScheme="twitter" as={Link} href={'#'} size={'sm'} fontSize={'lg'} icon={<FaTwitter/>} aria-label={'Twitter'}/>
            </Box>

            <Box>
                <IconButton colorScheme="red" as={Link} href={'#'} size={'sm'} fontSize={'lg'} icon={<FaYoutube/>} aria-label={'Youtube'}/>
            </Box>
          </Stack>

        </Container>
      </Box>
    </Box>
    
    </>
  )
}
