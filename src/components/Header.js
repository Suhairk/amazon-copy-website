import React from 'react'
import IMAGES from '../constants/IMAGES'
import { GoLocation } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsSearch, BsCart } from "react-icons/bs";


import './styles/Header.css'
function Header() {
  return (
    <div className='headerMainSection'>
        <div className='headerSection'>
            <div className='amazonDiv'>
            <img src={IMAGES.AMAZON_LOGO} className = "amazonLogo"/>
            </div>
        <div className='headerMainLocation'>
            <p>Deliver to</p>
            <div className='headerLocation'>
                <GoLocation size={20} className = "locationIcon"/>
                <h4>United Arab Emirates</h4>
            </div>
        </div>
        <div className='headerMainSearch'>
            <div className='downArrowSection'>
                <p>All</p>
                <IoMdArrowDropdown size={20} className='arrowDropDown'/>
            </div>
            <div className='searchInput'>
                <input type = "text" name ="search" id = "search" />
            </div>
            <div className='searcIconSection'>
            <BsSearch size={20} className ="searchIcon"/>
            </div>
        </div>
        <div className='uaeIconSection'>
                <img src={IMAGES.UAE_FLAG} className= "useIcon"></img>
                <IoMdArrowDropdown size={20} className='arrowDropDownUae'/>
        </div>
        <div className='signInHome'>
            <p>Hello, sign in</p>
            <div className='signInIcon'>
                <h4>Account and Lists</h4>
                <IoMdArrowDropdown size={20} className='arrowDropDownUae'/>
            </div>
        </div>
        <div className='signInHome'>
        <p>Return </p>
        <h4>& orders</h4>
        </div>
        <div className='cartSection'>
            <BsCart size={30} className='cartIcon'/>
            <h4>Cart</h4>
        </div>
        </div>
        
    </div>
  )
}

export default Header