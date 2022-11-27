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
    Select,
    FormHelperText,
    useColorModeValue, } from '@chakra-ui/react'
import { useState ,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ngo_img from '../../assets/ngo-img.jpg'

export default function RequestCard(props) {

    const {isOpen , onOpen , onClose} = useDisclosure();
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [donated, setDonation] = useState("")
  const [ngoList, setNgoList] = useState([]);
  const initialRef = React.useRef(null);

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

    checkLogin();
    getNgoData();

  }, []);

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
                {props.name}
            </Heading>

            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {props.org_name}
            </Heading>
            <Text color={'gray.500'}>
              
            </Text>
            <Text
                textAlign={'center'}
                fontSize={'0.8rem'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={1}>
                     {props.description}
            </Text>

            <Text
                textAlign={'center'}
                fontSize={'0.8rem'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={1}>
                     {props.address}
            </Text>
          </Stack>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6} mb={5}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('red.500', 'gray.800')}
              fontWeight={'400'}>
               {props.type}
            </Badge>
        </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontSize={'sm'} color={'gray.500'}>
                <b>Goal Amount : {props.amount}</b>
              </Text>
              <Text fontWeight={600}>
                  Deadline :  {props.deadline}
              </Text>
            </Stack>
          </Stack>
          <Box style={{
                marginTop: "20px"
          }}>
            <Progress value={50}/>
          </Box>
          <Button
            onClick={onOpen}
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
    </Center>
    
    </>
  )
}
