import React from 'react'
import { Link } from 'react-router-dom'
import '../components/styles/SideBar.css'
import { sideBardata } from '../constants/SIDEBAR'
import { IconContext } from 'react-icons';
import { FaUserTie } from "react-icons/fa";
import { AiOutlineClose  } from "react-icons/ai";

function SideBar({sideBar,showSideBar}) {
    console.log("side bar is " , sideBar)
  return (
    <div className = "sidebarMainContainer">  
        <IconContext.Provider value={{color:"gray"}}>
        <nav className={sideBar ? 'sideBarNavigation':"sideBarNavigationActive"}>
            <ul className='sideBarNavigationList'>
                <div className='headerSideBar'>
                <FaUserTie size={25} className="userLogo"/>
                <span>Hello, Sign in</span>
                </div>
                <div className = "closeIcon">
                <AiOutlineClose size={25} onClick={showSideBar} style={{color:"red"}} />
                </div>
                {sideBardata.map((itr, id)=>{  
                    return(
                        <li key={id} className = {itr.cName}>
                        <Link to={itr.path}>
                            {itr.icon}
                            <span>{itr.title}</span>
                        </Link>
                        </li>
                    )
                })}
                
            </ul>
        </nav>
    </IconContext.Provider>
  
    </div>
  )
}

export default SideBar