import React from 'react'
import {  Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Progress,
    Button,
    Badge,
    useColorModeValue, } from '@chakra-ui/react'
import ngo_img from '../../assets/ngo-img.jpg'

export default function EventCard(props) {
  return (
    <>  
    <Center py={6}>
      <Box
        maxW={'350px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'180px'}
          w={'full'}
          src={
            ngo_img
          }
          objectFit={'cover'}
        />

        <Box p={6}>
          <Stack spacing={3} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {props.title}
            </Heading>
            <Text color={'gray.500'}>
              {props.type}
            </Text>
            <Text
                textAlign={'center'}
                fontSize={'0.8rem'}
                
                color={useColorModeValue('gray.700', 'gray.400')}
                px={1}>
                {props.description}
            </Text>
          </Stack>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6} mb={5}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('red.500', 'gray.800')}
              fontWeight={'400'}>
               {props.status}
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('orange.200', 'gray.800')}
              fontWeight={'400'}>
              #LGBTQ
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('purple.200', 'gray.800')}
              fontWeight={'400'}>
              #FreeLife
            </Badge>
        </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{props.goal}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Goal Amount
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>12,000</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Raised Amount
              </Text>
            </Stack>
          </Stack>
          <Box style={{
                marginTop: "20px"
          }}>
            <Progress value={50}/>
          </Box>
          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('pink.500', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Donate Now
          </Button>
        </Box>
      </Box>
    </Center>
    </>
  )
}
