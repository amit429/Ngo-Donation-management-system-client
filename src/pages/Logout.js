import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Logout() {

    const navigate = useNavigate();


    useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res) => {
            navigate("/doner_login", { replace: true });
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [])



  return (
    <>
        <h1>Logging out ...</h1>
    
    </>
  )
}
