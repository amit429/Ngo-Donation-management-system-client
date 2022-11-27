import React from 'react'
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Link,
    Stack,
    Text,
    Select,
    
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function NgoRegistration() {

    const style = {
        marginTop : "2%",
    }

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [type , setType] = useState("");
    const [description, setDescription] = useState("");
    const [representative, setRepresentative] = useState("");

    const registerNgo = async (e) => {

        const res = await fetch("/Ngo-Registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                address,
                description,
                representative,
                type,
                password,
                cpassword
            })
        });

        const data = await res.json();

        if (res.status === 420){
            window.alert("Fill the field properly");
            window.location.reload();
        }
        else if (res.status === 421){
            window.alert("NGO already exist");
            window.alert("Please login");
            navigate("/ngo_login");
        }
        else if (res.status === 422){
            window.alert("Password not matching");
            window.location.reload();
        }
        else if (res.status === 201){
            window.alert("Registration Successful");
            navigate("/ngo_login");
        }
        else{
            window.alert("Registration Failed");
            window.location.reload();
        }
    }


  return (
    <>
         <Box style={{
            width: "38%",
            height: "135vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            flexDirection: "column",
            marginTop: "1%",
            padding: "2%",
            boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
            borderRadius: "5px"
        }}>
            <Text fontSize="4xl" textAlign="center" fontWeight="bold" color="teal.500">
                NGO Registration Form
            </Text>

            <FormControl method = "POST" style={{
                width: "100%",
                display: "flex",
                margin: "auto",
                flexDirection: "column",
                padding: "5%",
            }}>
                <FormLabel>Full Name</FormLabel>
                <Input 
                    placeholder="Full Name on the Organization" 
                    _placeholder={{ fontSize: "sm" }}
                    required variant= "flushed"
                    autoComplete='on'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <FormLabel style={style}>Email</FormLabel>    
                <Input 
                    placeholder="Email" 
                    _placeholder={{ fontSize: "sm" }}
                    required 
                    variant= "flushed"
                    value={email}
                    autoComplete="on"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <FormLabel style={style}>Phone Number</FormLabel>
                <Input 
                    type="number"
                    placeholder="91+ xxxxxxxxxx" 
                    _placeholder={{ fontSize: "sm" }}
                    required 
                    variant= "flushed"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <FormLabel style={style}>Address</FormLabel>
                <Input 
                    type="text"
                    placeholder="City Name" 
                    _placeholder={{ fontSize: "sm" }}
                    required 
                    variant= "flushed"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <FormLabel style={style}>Your NGO Description</FormLabel>
                <Input 
                    type="text"
                    placeholder="Description" 
                    _placeholder={{ fontSize: "sm" }}
                    required 
                    variant= "flushed"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <FormLabel style={style}>Representative Name</FormLabel>
                <Input 
                    type="text"
                    placeholder="Representative Name" 
                    _placeholder={{ fontSize: "sm" }}
                    required 
                    variant= "flushed"
                    value={representative}
                    onChange={(e) => setRepresentative(e.target.value)}
                />

                <FormLabel style={style}>Select your NGO type</FormLabel>
                <Select 
                    placeholder="Select a category" 
                    _placeholder={{ fontSize: "sm" }}
                    variant= "flushed"  
                    onChange={(e)=>{
                        setType(e.target.value)
                    }}
                >
                    <option value="Cancer">Cancer</option>
                    <option value="Gender Equality">Gender Equality</option>
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Environment">Environment</option>
                    <option value="Animal Welfare">Animal Welfare</option>
                    <option value="Disaster Relief">Disaster Relief</option>
                    <option value="Child Welfare">Child Welfare</option>
                    <option value="Covid Relief">Covid Relief</option>

                </Select>

                <FormLabel style={style}>Password</FormLabel>
                <Input 
                    placeholder="Password" 
                    _placeholder={{ fontSize: "sm" }}
                    type="password" 
                    required 
                    variant= "flushed"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <FormLabel style={style}>Confirm Password</FormLabel>
                <Input 
                    placeholder="Confirm Password" 
                    _placeholder={{ fontSize: "sm" }}
                    required 
                    variant= "flushed" 
                    type="password"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                />

                <Button 
                    type="submit" 
                    variant="outline" 
                    colorScheme="blue"
                   style={{
                        marginTop: "4%",
                   }}
                  onClick={registerNgo}
                >
                    Register
                </Button>
             </FormControl>
        </Box>
    
    
    </>
  )
}
