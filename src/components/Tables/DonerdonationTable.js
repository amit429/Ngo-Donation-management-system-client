import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect , useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from "@chakra-ui/react"
  import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';


export default function DonerdonationTable() {

    const navigate = useNavigate();
    const [donationList, setDonationList] = useState([]);
    const [user , setUser] = React.useState("");
    const [email , setEmail] = React.useState("");
    //console.log(donationList);

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
            setUser(data.name);
            setEmail(data.email);
    
          if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
          }
    
        } catch (error) {
          console.log(error);
          window.alert("Please Login to continue");
          navigate("/doner_login");
        }
      };
      
     const getDonations = async ()=>{

        try{

          const res = await fetch('/Userdonations' , {
            method: 'GET',
            headers: {
              Accept : 'application/json',
              'Content-Type' : 'application/json'
            }
          });
          
          const data = await res.json();
          //console.log(data);
          setDonationList(data);

        }catch(err){
            console.log(err);
        }
     }
    
      useEffect(() => {
         getDonations();
        checkLogin();
        
      }, []);
    
  return (
    <>
        <Navbar/>
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
        }}>
            <Heading>
                Welcome {user}
            </Heading>
        </Box>

        <Box className='donations_table'
            style={{
                maxWidth: '85%',
                margin: 'auto',
                padding: '20px',
                marginTop: '1%',
            }}
        >

        <TableContainer>
            <Table variant="striped" colorScheme='pink' width="100%">
                <TableCaption 
                    placement='top'
                    fontSize={30}
                    marginBottom={7}
                >
                    Donations table
                </TableCaption>
                <Thead>
                <Tr>
                    <Th>User Name</Th>
                    <Th>Email</Th>
                    <Th>Nominee Name</Th>
                    <Th>Donated NGO</Th>
                    <Th>Transaction ID</Th>
                    <Th isNumeric>Donated Amount</Th>
                    <Th>Date</Th>
                </Tr>
                </Thead>
                <Tbody>
                  {donationList.map((donation) => {
                    if(donation.email === email){
                      //slice the date and time
                      donation.date = donation.date.slice(0,10);
                      return(
                        <Tr>
                          <Td>{user}</Td>
                          <Td>{email}</Td>
                          <Td>{donation.fullname}</Td>
                          <Td>{donation.organization}</Td>
                          <Td>{donation._id}</Td>
                          <Td isNumeric>{donation.donated}</Td>
                          <Td>{donation.date}</Td>
                        </Tr>
                      )
                    }
                  })}
                
                </Tbody>
            </Table>
        </TableContainer>

        </Box>
            

    </>
  )
}
