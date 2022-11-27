import React, { useEffect } from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    Image,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Select,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import ngo_img from '../../assets/ngo-img.jpg'

export default function NgoCard(props) {

  const {isOpen , onOpen , onClose} = useDisclosure();
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [donated, setDonation] = useState("")
  const [ngoList, setNgoList] = useState([]);
  const initialRef = React.useRef(null);

  console.log(ngoList);

  const checkLogin = async () => {

    try {
      const res = await fetch('/checkLogin', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      const data = await res.json();
      //console.log(data.email);
      setEmail(data.email);

      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
    }
  }


  const handleDonation = async (e) => {

    e.preventDefault();

    const res = await fetch("/donation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        organization,
        donated
      }),
    });

    const data = await res.json();

    if(res.status === 420){
      window.alert("Minimum donation amount is 100");
    }
    else if(res.status === 421){
      window.alert("Thank you for donating a very generous amount.");
      window.alert("Donation done successfully");
      navigate("/successfull_donation");
    }
    else{
      window.alert("Donation done successfully");
      navigate("/successfull_donation");
    }
  }

  const getNgoData = async () => {

    try{

     const response = await fetch('/Ngo-list', {
         method: 'GET',
         headers: {
             Accept : 'application/json',
             'Content-Type': 'application/json'
         }
     });
     
     const data = await response.json();
    // console.log(data);
     setNgoList(data);
     //console.log(ngoList);

    }
    catch(err){
        console.log(err)
    }
 }

  useEffect(() => {
    getNgoData();
    checkLogin();
  }, []);

  return (
    <>
        <Center py={6}>
      <Box
        maxW={'370px'}
        w={'full'}
        height={'35rem'}
        h={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        
        <Image
          h={'180px'}
          w={'full'}
          src={
            ngo_img
          }
          objectFit={'cover'}
        />
        
        <Heading fontSize={'2xl'} fontFamily={'body'} mt={3}>
          {props.name}
        </Heading>
        <Text color={'gray.500'} mt={2}>
              Type : {props.type}
            </Text>
        <Text
            textAlign={'center'}
            fontSize={'0.8rem'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={0}
            mt={3}
        >
           {props.description}
        </Text>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}
            onClick={onOpen}
            >
            Donate Now
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'pink.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'pink.500',
            }}
            _focus={{
              bg: 'pink.500',
            }}>
            Read More
          </Button>
        </Stack>

        <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Make a Donation</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input ref={initialRef} placeholder='First name'
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
            </FormControl>

            <FormControl>
            <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder={email}
                value={email}
                isReadOnly
              />
            </FormControl>

            {/* <FormControl mt={4}>
              <FormLabel>Name of the Organization</FormLabel>
              <Input placeholder='Name of the NGO' 
                value={organization}
                onChange={(e) => {
                  setOrganization(e.target.value);
                }}
              />
            </FormControl> */}

            <FormControl mt={4}>
              <FormLabel>Name of the Organization</FormLabel>
                 <Select placeholder='Select One'
                  onChange={(e) => {
                    setOrganization(e.target.value);
                  }}
                 >
                    {ngoList.map((ngo) => {
                      return(
                        <option value={ngo.name}>{ngo.name}</option>
                      )
                    })}
                 </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Donation Amount</FormLabel>
              <Input placeholder='In Rs' 
                value={donated}
                onChange={(e) => {
                  setDonation(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}
              onClick={handleDonation}
            >
              Donate
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      </Box>
    </Center>
    
    </>
  )
}
