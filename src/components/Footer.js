import React from 'react'
import '../components/styles/Footer.css'
function Footer() {
  return (
    <div className='footerClass'>
        <div className='firstSection'>
            <div className='footerTitle'>
            <h4>Get to Know Us</h4>
            </div>
            <ul>
                <li>About Amazon</li>
                <li>Careers</li>
                <li> Amazon Science</li>
            </ul>
        </div>

        <div className='firstSection'>
            <div className='footerTitle'>
            <h4>Shop with Us</h4>
            </div>
            <ul>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Your Addresses</li>
                <li> Your List </li>
            </ul>
        </div>

        <div className='firstSection'>
            <div className='footerTitle'>
            <h4>Make Money with Us</h4>
            </div>
            <ul>
                <li>Sell on Amazon</li>
                <li>Fulfillment by Amazon</li>
                <li> Become an Affiliate</li>
                <li>Advertise Your Products</li>
            </ul>
        </div>

        <div className='firstSection'>
            <div className='footerTitle'>
            <h4>Let Us Help You</h4>
            </div>
            <ul>
                <li>Help</li>
                <li>COVID-19 and Amazon</li>
                <li>Shipping & Delivery</li>
                <li>Returns & Replacements</li>
                <li>Amazon App Download</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer