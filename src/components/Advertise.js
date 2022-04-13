import React from 'react'
import '../components/styles/Advertise.css'
import IMAGES from '../constants/IMAGES'
import { MdOutlineLanguage,MdArrowDropDown,MdArrowDropUp } from "react-icons/md";

function Advertise() {
  return (
    <div className='advertiseMainContainer'>
        <div className='amazonDivAdvertise'>
            <img src={IMAGES.AMAZON_LOGO} className = "amazonLogoAdvertise"/>
        </div>
        <div className='languageConatiner'>
        <MdOutlineLanguage size={20} className = "web" />
        <p>English</p>
        <div className='dropDown'>
            <MdArrowDropUp size={12} />
            <MdArrowDropDown size={12} />
        </div>
        </div>
        
        <div className='locationAdvertise'>
            <img src={IMAGES.UAE_FLAG} className= "useIconAdvertise"/>
            <p>United Arab Emirates</p>
        </div>
    </div>
  )
}

export default Advertise