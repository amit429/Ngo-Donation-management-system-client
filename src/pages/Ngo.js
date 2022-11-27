import React, { useState , useEffect } from 'react'
import {
    Box,
    Text,
    IconButton,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import NgoCard from '../components/Cards/NgoCard'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

export function FavNgo() {
    return (
        <>
        
        </>
    )
}

export default function Ngo() {

    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [ngoList, setNgoList] = useState([]);
    const [LoggedIn, setLoggedIn] = React.useState(false);

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
            //console.log(data);
            setLoggedIn(true);
      
            if(!res.status === 200){
              const error = new Error(res.error);
              throw error;
            }
      
          } catch (error) {
            //console.log(error);
            window.alert("Please Login to continue");
            navigate("/doner_login");
          }
    }

    
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const Search = async () => {
           const product = {search};
           const res = await fetch(`/search?${new URLSearchParams(product).toString()}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
        });

        const data = await res.json();
        //console.log(data);
        setSearchResults(data);
        console.log(searchResults);
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
        getNgoData()
        checkLogin();
    }, [])
    

    
  
  return (
    <>
        <Navbar/>
       <Box className="ngo_main" style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'lightblue',
            paddingTop: '50px',
       }}>
            <Box bg= "#774360" className="ngo_header" style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '2.5rem',
                fontWeight: '700',
                width: '50%',
                margin: 'auto',
                padding: '5px',
            }}>
                <Text>Welcome to the NGO list Section</Text>
            </Box>

            <Box className="Search" style={{
                display: 'flex',
                flexDirection: 'row',
                margin: 'auto',
                marginTop: '3%',
                marginLeft: '32%',
            }}>

                <IconButton aria-label='Search database' icon={<SearchIcon />} 
                   onClick={Search}
                />
                <input type="text" placeholder="Search for the type (Cancer , Education , Children)" style={{
                    width: '50%',
                    height: '40px',
                    fontSize: '0.8rem',
                    marginLeft: '1%',
                    borderRadius: '5px',
                    padding: '20px',
                    border: 'none',
                    outline: 'none',
                }}
                onChange={handleSearch}
                />
            </Box>

            <Box className="all_ngo_cards" style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                marginTop: '2%',
                padding: '30px',
            }}>
                {searchResults.map((item) => {
                    return (
                        <NgoCard 
                            name={item.name} 
                            type={item.type} 
                            description={item.description}
                        />
                    )
                })}
            </Box>
            <hr/>

            <Box className="all_ngo_cards" style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                marginTop: '2%',
                padding: '30px',
            }}>
                {ngoList.map((item) => {
                    return (
                        <NgoCard 
                            name={item.name} 
                            type={item.type} 
                            description={item.description}
                        />
                    )
                })}
            </Box>
        </Box> 
    </>
  )
}
