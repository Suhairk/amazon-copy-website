import React,{useState} from 'react'
import './styles/Navbar.css'
import { FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { BsCashStack } from "react-icons/bs";
import {Link} from 'react-router-dom'
import SideBar from './SideBar';
function Navbar({showSideBar}) {

  return (
    <div className='NavbarSection'>
      <nav className='navigationContainer'>
        <ul className='navigationElements'>
          {/* <Link to="/all"> */}
          <div className='allMenu'>
            <FaBars size={18} className="barIcon"  
            onClick={showSideBar}/>
          <li className='allBold'>All</li>
          </div>
          {/* </Link> */}
          
          <li>Sell</li>
          <li>Best Seller</li>
          <li>Today's Deal</li>
          <li>Customer Service</li>
          <li>Fashion</li>
          <li>New Release</li>
          <li>Mobile Phone</li>
          <li>Electronics</li>
          <li>Health & Personal Care</li>
          <div className='primeIcon'>
          <li>Prime</li>
          <IoMdArrowDropdown size={18} className="barIcon"/>
          </div>

        </ul>

      </nav>
      <div className='navRightIconMain'>
          <div className='navRightIcons'>
              <MdOutlineLocalShipping size={20} className = "shipIcons"/>
            <p>Fast and Free shipping</p>
            </div>
            <div className='navRightIcons'>
              <IoReturnUpBackOutline size = {20} className = "shipIcons" />
            <p>Free return</p>
            </div>
            <div className='navRightIcons'>
              <BsCashStack size = {20} className = "shipIcons"/>
            <p>Cash on delivery</p>
            </div>
          </div>
    </div>
  )
}

export default Navbar