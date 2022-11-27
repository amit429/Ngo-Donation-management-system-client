import React from 'react'
import { Box, Heading, Text , Wrap, WrapItem , Button  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function SuccessfullDonation() {

    const navigate = useNavigate();
  return (
    <>
      <Box textAlign="center" py={10} px={6}>
        <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Donation done successfully
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua.
          </Text>

          <Wrap spacing={20} style={{
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',

          }}>
            <WrapItem>
              <Button colorScheme='pink'
                onClick={() => navigate('/')}
              >Back to Home Page</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='orange'
                onClick={() => navigate('/ngo')}
              >Back to NGO List</Button>
            </WrapItem>
          </Wrap>
    </Box>
    
    </>
  )
}
