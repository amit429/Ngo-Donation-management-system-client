import React from 'react'
import About from '../components/About/About'
import Footer from '../components/Banners/Footer'
import Admin_navbar from '../components/Navbar/Admin_navbar'
import Stats from '../components/Statistics/Stats'

export default function Adminlanding() {
  return (
    <>
      <Admin_navbar/>
      <About/>
      <Stats/>
      <Footer/>  
    </>
  )
}
