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

export default function DonerRegistration() {

    const style = {
        marginTop : "2%",
    }

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [dob, setDOB] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const registerDoner = async (e) => {

        const res = await fetch("/Doner-register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                dob,
                address,
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
            window.alert("Email already exist");
            window.alert("Please login");
            navigate("/doner_login");
        }
        else if (res.status === 422){
            window.alert("Password and Confirm Password are not matching");
            window.location.reload();
        }
        else if (res.status === 418){
            window.alert("You are not eligible to register");
            window.location.reload();
        }
        else if (res.status === 201) {
            alert("User registered successfully");
            alert("Please login");
            navigate("/doner_login");
        } else {
            alert(data.error);
        }
    }



  return (
    <>
        <Box style={{
            width: "35%",
            height: "100vh",
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
                Doner Registration Form
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
                    placeholder="Full Name" 
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
                    type='email'
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

                <FormLabel style={style}>Date Of Birth</FormLabel>
                <Input 
                    type="date"
                    placeholder="Date Of Birth (DD/MM/YYYY)" 
                    _placeholder={{ fontSize: "sm" }}
                    required 
                    variant= "flushed"
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                />

                <Button 
                    type="submit" 
                    variant="outline" 
                    colorScheme="blue"
                   style={{
                        marginTop: "4%",
                   }}
                  onClick={registerDoner}
                >
                    Register
                </Button>
             </FormControl>

        </Box>

    
    </>
  )
}
