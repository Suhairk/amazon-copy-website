import React from 'react'
import './styles/GiftandOffers.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import IMAGES from '../constants/IMAGES'

const WinWidth = window.innerWidth;
const WinHeight = window.innerHeight
console.log(WinWidth,WinHeight )

function GiftandOffers() {

  return (
      <div className='giftandOfffers'>
        <div className='giftOffersMainContainer'>
            <div className='carousel'>
        <Carousel autoPlay={true}
        showStatus = {false}
        showThumbs = {false} 
        showIndicators= {false} 
        infiniteLoop={true} 
        interval="5000">
            <div>
                <img src={IMAGES.CAROUSAL_1}></img>
            </div>
            <div>
                <img src={IMAGES.CAROUSAL_2}></img>
            </div>
            <div>
                <img src={IMAGES.CAROUSAL_3}></img>
            </div>
            <div>
                <img src={IMAGES.CAROUSAL_4}></img>
            </div>
            <div>
                <img src={IMAGES.CAROUSAL_5}></img>
            </div>
            <div>
                <img src={IMAGES.CAROUSAL_6}></img>
            </div>
            <div>
                <img src={IMAGES.CAROUSAL_7}></img>
            </div>
        </Carousel>
        </div>
        <div className='giftOffersSubContainer'>
            <div className='firstContainer'>
            <div className='thirdContainerText'>
                <h4>0% installments* | Up to 40% off Appliances</h4>
            </div>
                <div className='firstContainerOffers'>
                    <div className='firstContainerOffersItems'>
                        <img src={IMAGES.AIRFRYERS} className='firstContainerOffersImages'></img>
                        <p>Air Fryers</p>
                    </div>
                    <div className='firstContainerOffersItems'>
                        <img src={IMAGES.COFFIE_MACHINES} className='firstContainerOffersImages'></img>
                        <p>Coffie Machines</p>
                    </div>
                    <div className='firstContainerOffersItems'>
                        <img src={IMAGES.APPLIANCE_STORE} className='firstContainerOffersImages'></img>
                        <p>Home Appliance</p>
                    </div>
                    <div className='firstContainerOffersItems'>
                        <img src={IMAGES.VACCUM_CLEANER} className='firstContainerOffersImages'></img>
                        <p>Vaccum Cleaner</p>
                    </div>
                </div>
                <div className='footerLink'>
                    <a href='#' >Explore More</a>
                </div>
            </div>

            <div className='secondContainer'>
            <div className='thirdContainerText'>
                <h4>Xiaomi 12 | With Free Gift</h4>
            </div>
                <div className='secondContainerOffersItems'>
                    <img src={IMAGES.XIOMI} className='secondContainerOffersImages'></img>
                </div>
                
                <div className='footerLink'>
                    <a href='#' >Shop us today</a>
                </div>
            </div>

            <div className='thirdContainer'>
                <div className='thirdContainerText'>
                    <h4>Health & beauty | Up to 50% offers</h4>
                </div>
                
                <div className='thirdContainerOffers'>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.PERSONAL} className='thirdContainerOffersImages'></img>
                        <p>personal</p>
                    </div>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.GROOMING} className='thirdContainerOffersImages'></img>
                        <p>Grooming</p>
                    </div>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.BEAUTY} className='thirdContainerOffersImages'></img>
                        <p>Beauty</p>
                    </div>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.NUTRITION} className='thirdContainerOffersImages'></img>
                        <p>Nutrition</p>
                    </div>
                </div>
                <div className='footerLink'>
                    <a href='#' >See More</a>
                </div>
            </div>
            
            <div className='fourthMainContainer'>
            <div className='fourthContainer'>
            <div className='thirdContainerText'>
                    <h4>Subscribe & Save</h4>
            </div>
                <div className='fourthContainerOffers'>   
                <p>Get extra 10% off your scheduled deliveries. 
                    FREE shipping. No fees. No commitments.</p>  
                </div>
                <div className='footerLink'>
                    <a href='#' >See all</a>
                </div>
            
            </div>
            <div className='showNowImageContainer'>
                <img src={IMAGES.SHOPENOW} className = 'shopNowImage'></img>
            </div>
            </div>
        </div>
        

    </div>
    </div>
  
  )
}

export default GiftandOffers