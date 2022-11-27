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

export default function Donerlogin() {

    const style = {
        marginTop : "2%",
    }

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {

        const res = await fetch("/doner_sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await res.json();

        if (res.status === 400 || res.status === 401 || !data) {
            window.alert("Invalid Credentials");
        } else {
            window.alert("Login Successful");
            navigate("/");
        }
    }

  return (
    <>
        <Box style={{
            width: "35%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            flexDirection: "column",
            marginTop: "5%",
            padding: "2%",
            boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
            borderRadius: "5px"
        }}>
            <Text fontSize="4xl" textAlign="center" fontWeight="bold" color="teal.500">
                Sign In
            </Text>

            <FormControl method = "POST" style={{
                width: "100%",
                display: "flex",
                margin: "auto",
                flexDirection: "column",
                padding: "5%",
            }}>
                
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

                <Button 
                    type="submit" 
                    variant="outline" 
                    colorScheme="blue"
                   style={{
                        marginTop: "4%",
                   }}
                   onClick={login}
                >
                    Login
                </Button>
             </FormControl>

        </Box>
    </>
  )
}
