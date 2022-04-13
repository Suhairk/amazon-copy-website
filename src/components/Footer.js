import React from 'react'
import '../components/styles/Footer.css'
function Footer() {
  return (
    <div className='footerClass'>
        <div className='firstSection'>
            <ul>
            <li className='listHeader'>Get to Know Us</li>
                <a href='#'><li>About Amazon</li></a>
                <a href='#'><li>Careers</li></a>
                <a href='#'><li> Amazon Science</li></a>
            </ul>
        </div>

        <div className='firstSection'>
            <ul>
                <li className='listHeader'>Shop with Us</li>
                <a href='#'><li>Your Account</li></a>
                <a href='#'><li>Your Orders</li></a>
                <a href='#'><li>Your Addresses</li></a>
                <a href='#'> <li> Your List </li></a>
            </ul>
        </div>

        <div className='firstSection'>
            <ul>
                <li className='listHeader'>Make Money with Us</li>
                <a href='#'><li>Sell on Amazon</li></a>
                <a href='#'><li>Fulfillment by Amazon</li></a>
                <a href='#'><li> Become an Affiliate</li></a>
                <a href='#'><li>Advertise Your Products</li></a>
            </ul>
        </div>

        <div className='firstSection'>
            <ul>
                <li className='listHeader'>Let Us Help You</li>
                <a href='#'><li>Help</li></a>
                <a href='#'><li>COVID-19 and Amazon</li></a>
                <a href='#'><li>Shipping & Delivery</li></a>
                <a href='#'><li>Returns & Replacements</li></a>
                <a href='#'><li>Amazon App Download</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Footer