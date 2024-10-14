import React from 'react'
import HeaderSection from '../components/HeaderSection'
import NavSection from '../components/NavSection'
import MainSection from '../components/MainSection'
import Feature from '../components/Feature'
import Latest from '../components/Latest'
import Offer from '../components/Offer'
import Unique from '../components/Unique'
import Trending from '../components/Trending'
import Discount from '../components/Discount'
import Top from '../components/Top'
import Promote from '../components/Promote'
import LatestBlog from '../components/LatestBlog'
import Footer from '../components/Footer'
import Partner from '../components/Partner'

const HomePage = () => {
  return (
    <>
    <MainSection/>
    <Feature/>
    <Latest/>
    <Offer/>
    <Unique/>
    <Trending/>
    <Discount/>
    <Top/>
    <Promote/>
    <LatestBlog/>
    </>
  )
}

export default HomePage