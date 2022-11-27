import React, { useEffect } from 'react'
import About from '../components/About/About'
import Footer from '../components/Banners/Footer'
import Hero from '../components/Banners/Hero'
import Highlights from '../components/Banners/Highlights'
import Navbar from '../components/Navbar/Navbar'
import Stats from '../components/Statistics/Stats'
import Ngo, { FavNgo } from './Ngo'
import { useNavigate } from 'react-router-dom'

export default function Landing() {

  const navigate = useNavigate();

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
      console.log(data);
      setLoggedIn(true);

      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
      window.alert("Please Login to continue");
      navigate("/doner_login");
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Stats/>
        <Highlights/>
        <Footer/>
    </>
  )
}
