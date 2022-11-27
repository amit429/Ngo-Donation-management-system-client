import React from 'react'
import { useEffect , useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import NgoNavbar from '../components/Navbar/NgoNavbar';
import Hero from '../components/Banners/Hero';
import Footer from '../components/Banners/Footer';

export default function NgoLanding() {

    const navigate = useNavigate();

    const checkLogin = async () => {

        try{
            const res = await fetch('/checkNgologin' , {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });

            const data = await res.json();

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
            window.alert("Please Login to continue");
            navigate("/ngo_login");
        }
    }

    useEffect(() => {
        checkLogin();
    }, []);

  return (
    <>
        <NgoNavbar />
        <Hero />
        <Footer />
    
    
    
    </>
  )
}
