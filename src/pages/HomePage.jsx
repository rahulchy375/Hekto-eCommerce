import React from 'react'
import HeaderSection from '../components/HeaderSection'
import NavSection from '../components/NavSection'
import MainSection from '../components/MainSection'
import Feature from '../components/Feature'
import Latest from '../components/Latest'
import Offer from '../components/Offer'
import Unique from '../components/Unique'
import Trending from '../components/Trending'

const HomePage = () => {
  return (
    <>
    <HeaderSection/>
    <NavSection/>
    <MainSection/>
    <Feature/>
    <Latest/>
    <Offer/>
    <Unique/>
    <Trending/>
    </>
  )
}

export default HomePage