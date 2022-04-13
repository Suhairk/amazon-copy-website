import React from 'react'
import GiftandOffers from '../components/GiftandOffers'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import TodaysDeal from '../components/TodaysDeal'
import '../components/styles/HomeScreen.css'
import HealthBeauty from '../components/HealthBeauty'
import GiftandOffers2 from '../components/GiftandOffers2'
import SignOption from '../components/SignOption'
import Footer from '../components/Footer'
import BacktoTop from '../components/BacktoTop'
import Advertise from '../components/Advertise'
function HomeScreen() {
  return (
    <div className='homeScreen'>
    <Header/>
    <Navbar/>
    <GiftandOffers/>
    <GiftandOffers2/>
    <TodaysDeal/>
    <HealthBeauty/>
    <TodaysDeal/>
    <GiftandOffers2/>
    <SignOption/>
    <BacktoTop/>
    <Footer/>
    <Advertise/>
    </div>
    
  )
}

export default HomeScreen