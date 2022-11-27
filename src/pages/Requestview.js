import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useState , useEffect } from 'react';
import RequestCard from '../components/Cards/RequestCard'

export default function Requestview() {

    const [ngorequests , setNgorequests] = React.useState([]);

    //fetch request data from backend

    const requests = async () => {

        try{
            const res = await fetch('/requests' , {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
            });

            const data = await res.json();
            setNgorequests(data);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {

        requests();

    }, []);
  return (
    <>
        <Navbar />
        {ngorequests.map((request) => (

            <RequestCard
                name={request.name}
                org_name={request.org_name}
                description={request.description}
                address={request.address}
                type={request.type}
                deadline={request.deadline}
                amount={request.amount}
            />
        ))}
    
    
    
    </>
  )
}
