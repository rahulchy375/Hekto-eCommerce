import React from 'react'
import HeaderSection from '../components/HeaderSection'
import NavSection from '../components/NavSection'
import { Outlet } from 'react-router-dom'
import Partner from '../components/Partner'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
    
    <HeaderSection/>
    <NavSection/>
    <Outlet/>
    <Partner/>
    <Footer/>

    </>
  )
}

export default Layout