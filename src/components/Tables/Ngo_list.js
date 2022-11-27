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
    Button,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react"
  import { useNavigate } from 'react-router-dom'
import Admin_navbar from '../Navbar/Admin_navbar';

export default function Ngo_list() {

    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [ngoList, setNgoList] = useState([]);
    const [LoggedIn, setLoggedIn] = React.useState(false);
    const [id, setId] = React.useState("");

    // const checkLogin = async () => {
    //     try {
    //         const res = await fetch('/checkLogin', {
    //           method: 'GET',
    //           headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //           },
    //           credentials: 'include'
    //         });
      
    //         const data = await res.json();
    //         //console.log(data);
    //         setLoggedIn(true);
      
    //         if(!res.status === 200){
    //           const error = new Error(res.error);
    //           throw error;
    //         }
      
    //       } catch (error) {
    //         //console.log(error);
    //         window.alert("Please Login to continue");
    //         navigate("/doner_login");
    //       }
    // }

    
    // const handleSearch = (e) => {
    //     setSearch(e.target.value)
    // }

    // const Search = async () => {
    //        const product = {search};
    //        const res = await fetch(`/search?${new URLSearchParams(product).toString()}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //     });

    //     const data = await res.json();
    //     //console.log(data);
    //     setSearchResults(data);
    //     console.log(searchResults);
    // }

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

    const handleDelete = async (id) => {
        //console.log(id);
        const res = await fetch(`/delete-ngo/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
        });

        const data = await res.json();
        if(res.status === 200){
            window.alert("Deleted Successfully");
            window.location.reload();
            getNgoData();
        }
        else{
            window.alert("Something went wrong");
        }
    }

    useEffect(() => {
        getNgoData()
        //checkLogin();
    }, [])
    

  return (
    <>
        <Admin_navbar/>
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
        }}>
            <Heading>
                Welcome Admin
            </Heading>
        </Box>

        <Box className='donations_table'
            style={{
                maxWidth: '95%',
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
                    NGO List Table
                </TableCaption>
                <Thead>
                <Tr>
                    <Th>UID</Th>
                    <Th>NGO Name</Th>
                    <Th>Email</Th>
                    <Th>Representative Name</Th>
                    <Th>Type</Th>
                    <Th isNumeric>Contact Number</Th>
                    <Th>Operation</Th>
                </Tr>
                </Thead>
                <Tbody>
                  {ngoList.map((list) => {
                      return(
                        <Tr>
                          <Td>{list._id}</Td>
                          <Td>{list.name}</Td>
                          <Td>{list.email}</Td>
                          <Td>{list.representative}</Td>
                          <Td>{list.type}</Td>
                          <Td isNumeric>{list.phone}</Td>
                          <Td><Button colorScheme="red"
                            onClick={() => handleDelete(list._id)}
                          >Delete</Button></Td>
                        </Tr>
                      )
                  })}
                
                </Tbody>
            </Table>
        </TableContainer>

        <Wrap spacing={20} style={{
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',

          }}>
            <WrapItem>
              <Button colorScheme='pink'
                onClick={() => navigate('/ngo_registration')}
              >Add a NGO</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='orange'
                onClick={() => navigate('/adminlanding')}
              >Back to Home Page</Button>
            </WrapItem>
          </Wrap>

        </Box>
    </>
  )
}
