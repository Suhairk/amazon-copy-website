import React from 'react'
import './styles/GiftandOffers.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import IMAGES from '../constants/IMAGES'

function GiftandOffers() {
  return (
      <div className='giftandOfffers'>
    <div className='giftOffersMainContainer'>
        <div className='carousel'>
        <Carousel autoPlay={false}
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
           
            <div className='fifthContainer'>
                <div className='thirdContainerText'>
                    <h4>Health & beauty | Up to 50% offers</h4>
                </div>
                <div className='fifthContainerOffers'>
                    <div className='fifthContainerOffersItems1'>
                        <img src={IMAGES.BEAUTY2} className='thirdContainerOffersImages'></img>
                        <p>personal</p>
                    </div>
                    <div className='fifthContainerOffersItems'>
                        <img src={IMAGES.HOMECARE} className='thirdContainerOffersImages'></img>
                        <p>Grooming</p>
                    </div>
                    <div className='fifthContainerOffersItems'>
                        <img src={IMAGES.GROCERY} className='thirdContainerOffersImages'></img>
                        <p>Beauty</p>
                    </div>
                    <div className='fifthContainerOffersItems'>
                        <img src={IMAGES.PERSONAL2} className='thirdContainerOffersImages'></img>
                        <p>Nutrition</p>
                    </div>
                </div>
                <div className='footerLink'>
                    <a href='#' >See More</a>
                </div>
            </div>

            <div className='thirdContainer'>
                <div className='thirdContainerText'>
                    <h4>From AED 439 | Large appliances</h4>
                </div>
                <div className='thirdContainerOffers'>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.APPLIANCE_STORE2} className='thirdContainerOffersImages'></img>
                        <p>Appliances</p>
                    </div>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.WALLETS} className='thirdContainerOffersImages'></img>
                        <p>Wallets and bags</p>
                    </div>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.REFRIGERATOR} className='thirdContainerOffersImages'></img>
                        <p>Refrigerator</p>
                    </div>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.MICROOVEN} className='thirdContainerOffersImages'></img>
                        <p>Micro Oven</p>
                    </div>
                </div>
                <div className='footerLink'>
                    <a href='#' >Shop now with 0% Installments*</a>
                </div>
            </div>


            <div className='thirdContainer'>
                <div className='thirdContainerText'>
                    <h4>Inspired by your picks | Up to 30% off toys</h4>
                </div>
                <div className='thirdContainerOffers'>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.TOY} className='thirdContainerOffersImages'></img>
                        <p>The toy store</p>
                    </div>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.PUSH} className='thirdContainerOffersImages'></img>
                        <p>Push pop toys</p>
                    </div>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.SCOOTER} className='thirdContainerOffersImages'></img>
                        <p>Scooter & ride-on</p>
                    </div>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.ACTIONFIGURE} className='thirdContainerOffersImages'></img>
                        <p>Action figure</p>
                    </div>
                </div>
                <div className='footerLink'>
                    <a href='#' >Explore more</a>
                </div>
            </div>

            <div className='thirdContainer'>
                <div className='thirdContainerText'>
                    <h4>The men's outlet and </h4>
                    <h4>stores</h4>
                </div>             
                <div className='thirdContainerOffers'>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.CLOTHS} className='thirdContainerOffersImages'></img>
                        <p>Cloths</p>
                    </div>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.SHOES} className='thirdContainerOffersImages'></img>
                        <p>Shoes</p>
                    </div>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.WATCHES} className='thirdContainerOffersImages'></img>
                        <p>Watches</p>
                    </div>
                    <div className='thirdContainerOffersItems'>
                        <img src={IMAGES.WALLETS} className='thirdContainerOffersImages'></img>
                        <p>Wallets</p>
                    </div>
                </div>
                <div className='footerLink'>
                    <a href='#' >See More</a>
                </div>
            </div>
            <div className='seprator'></div>
        </div>
    </div>
    </div>
  
  )
}

export default GiftandOffers