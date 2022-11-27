import React from 'react'
import NgoNavbar from '../components/Navbar/NgoNavbar'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
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
  import { useState , useEffect } from 'react';

export default function NgoRequests() {

    const {isOpen , onOpen , onClose} = useDisclosure();
    const initialRef = React.useRef(null);

    const [name, setName] = useState("");
    const [org_name, setOrgName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [type , setType] = useState("");
    const [deadline , setDeadline] = useState("");
    const [amount , setAmount] = useState("");

    const checkLogin = async () => {

        try {
          const res = await fetch('/checkNgologin', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            credentials: 'include'
          });
    
          const data = await res.json();
          //console.log(data.email);
          setOrgName(data.name);
    
        } catch (err) {
          console.log(err);
        }
    }

    const addRequest = async (e) => {

        try {

            const res = await fetch('/addRequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    org_name,
                    description,
                    address,
                    type,
                    deadline,
                    amount
                })
            });

            const data = await res.json();

            if (res.status === 422 || !data || res.status === 420) {
                window.alert("Invalid Creation");
            } else if(res.status === 418){
                window.alert("Invalid Deadline");
            } else{
                window.alert("Request Created Successfully");
                window.location.reload();
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        checkLogin();
    }, []);

  return (
    <>
        <NgoNavbar />
        <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Creating A Fund Raiser{' '}
          <Text as={'span'} color={'orange.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}
            onClick={onOpen}
            >
                Create a Request
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
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
              <FormLabel>Request Name</FormLabel>
              <Input ref={initialRef} placeholder='First name'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormControl>

            <FormControl>
            <FormLabel>Name of the organization</FormLabel>
              <Input ref={initialRef} placeholder={org_name}
                value={org_name}
                isReadOnly
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Request type</FormLabel>
                 <Select placeholder='Select One'
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                 >
                    <option value='urgent'>Urgent</option>
                    <option value='normal'>Normal</option>
                 </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Request Description</FormLabel>
              <Input ref={initialRef} placeholder='description'
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input ref={initialRef} placeholder='address'
                value={address}
                onChange={(e) => {
                    setAddress(e.target.value);
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Request Deadline</FormLabel>
              <Input ref={initialRef} placeholder='due date'
                type={'date'}
                value={deadline}
                onChange={(e) => {
                    setDeadline(e.target.value);
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Donation Amount Required</FormLabel>
              <Input placeholder='In Rs' 
                type={'number'}
                value={amount}
                onChange={(e) => {
                    setAmount(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}
              onClick={addRequest}
            >
               Create Now
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
    
    </>
  )
}
