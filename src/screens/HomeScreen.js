import React from 'react'
import GiftandOffers from '../components/GiftandOffers'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import TodaysDeal from '../components/TodaysDeal'
function HomeScreen() {
  return (
    <div className='homeScreen'>
    <Header/>
    <Navbar/>
    <GiftandOffers/>
    <TodaysDeal/>
    </div>
    
  )
}

export default HomeScreen