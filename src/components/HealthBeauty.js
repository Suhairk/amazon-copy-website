import React from 'react'
import '../components/styles/HealthBeauty.css'
import IMAGES from '../constants/IMAGES'

import Carousel from "react-elastic-carousel";
const itemsOffer = [
  {price : "AED 101.75" , image :IMAGES.ITEM11},
  {price : "AED 85.7" , image :IMAGES.ITEM21},
  {price : "AED 89.25" , image :IMAGES.ITEM31},
  {price : "AED 1200.75" , image :IMAGES.ITEM161},
  {price : "AED 151.75" , image :IMAGES.ITEM51},
  {price : "AED 110.25" , image :IMAGES.ITEM61},
  {price : "AED 101.75" , image :IMAGES.ITEM71},
  {price : "AED 10.75" , image :IMAGES.ITEM81},
  {price : "AED 20.15" , image :IMAGES.ITEM91},
  {price : "AED 25.75" , image :IMAGES.ITEM101},
  {price : "AED 125.75" , image :IMAGES.ITEM611},
  {price : "AED 185.75" , image :IMAGES.ITEM121},
  {price : "AED 128.75" , image :IMAGES.ITEM131},
  {price : "AED 251.75" , image :IMAGES.ITEM181},
  {price : "AED 101.75" , image :IMAGES.ITEM151},
  {price : "AED 650.75" , image :IMAGES.ITEM161},
  {price : "AED 155.75" , image :IMAGES.ITEM171},
  {price : "AED 189.75" , image :IMAGES.ITEM191},
  {price : "AED 199.75" , image :IMAGES.ITEM201},
  {price : "AED 699.75" , image :IMAGES.ITEM14},
  {price : "AED 699.75" , image :IMAGES.ITEM221},
  {price : "AED 699.75" , image :IMAGES.ITEM51},
  {price : "AED 25.75" , image :IMAGES.ITEM101},
  {price : "AED 125.75" , image :IMAGES.ITEM61},
  {price : "AED 185.75" , image :IMAGES.ITEM121},
  {price : "AED 128.75" , image :IMAGES.ITEM131},
  {price : "AED 251.75" , image :IMAGES.ITEM181},
  {price : "AED 101.75" , image :IMAGES.ITEM151},
  {price : "AED 650.75" , image :IMAGES.ITEM161},

]
const breakPoints =[
  {width: 1, itemsToShow: 2},
  { width: 550, itemsToShow: 3, itemsToScroll: 1, pagination: true },
  { width: 850, itemsToShow: 4 },
  { width: 1150, itemsToShow:7, itemsToScroll: 1 , pagination:true},
  { width: 1450, itemsToShow: 9 },
  { width: 1750, itemsToShow: 11 },]
function HealthBeauty() {
  return (
    <div className='HealthlMainConatainer'>
    <div className='HealthContainer'>
    <div className='thirdContainerText'>
            <h4>Health & Beauty</h4>
        </div>
      <Carousel breakPoints={breakPoints} >
        {itemsOffer.map((itr,id)=>
        <div className='HealthcarousalContainer'>
              <img className='HealthsOfferImage' key={id} src={itr?.image} alt = {itr?.price}/>
              <h3>{itr?.price}</h3>
        </div>
        
  )}
      </Carousel>
  </div>
    
</div>
  )
}

export default HealthBeauty