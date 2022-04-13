import React from 'react'
import IMAGES from '../constants/IMAGES'
import '../components/styles/GiftandOffers2.css'
function GiftandOffers2() {
  return (
    <div className='giftOffersSubContainer2'>
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
    </div>
  )
}

export default GiftandOffers2