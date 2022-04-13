import React from 'react'
import '../components/styles/TodaysDeal.css'
import IMAGES from '../constants/IMAGES'

import Carousel from "react-elastic-carousel";
const itemsOffer = [
  {price : "AED 101.75" , image :IMAGES.ITEM1},
  {price : "AED 85.7" , image :IMAGES.ITEM2},
  {price : "AED 89.25" , image :IMAGES.ITEM3},
  {price : "AED 1200.75" , image :IMAGES.ITEM16},
  {price : "AED 151.75" , image :IMAGES.ITEM5},
  {price : "AED 110.25" , image :IMAGES.ITEM6},
  {price : "AED 101.75" , image :IMAGES.ITEM7},
  {price : "AED 10.75" , image :IMAGES.ITEM8},
  {price : "AED 20.15" , image :IMAGES.ITEM9},
  {price : "AED 25.75" , image :IMAGES.ITEM10},
  {price : "AED 125.75" , image :IMAGES.ITEM6},
  {price : "AED 185.75" , image :IMAGES.ITEM12},
  {price : "AED 128.75" , image :IMAGES.ITEM13},
  {price : "AED 251.75" , image :IMAGES.ITEM18},
  {price : "AED 101.75" , image :IMAGES.ITEM15},
  {price : "AED 650.75" , image :IMAGES.ITEM16},
  {price : "AED 155.75" , image :IMAGES.ITEM17},
  {price : "AED 189.75" , image :IMAGES.ITEM19},
  {price : "AED 199.75" , image :IMAGES.ITEM20},
  {price : "AED 699.75" , image :IMAGES.ITEM14},
  {price : "AED 699.75" , image :IMAGES.ITEM22},
  {price : "AED 699.75" , image :IMAGES.ITEM5},
  {price : "AED 25.75" , image :IMAGES.ITEM10},
  {price : "AED 125.75" , image :IMAGES.ITEM6},
  {price : "AED 185.75" , image :IMAGES.ITEM12},
  {price : "AED 128.75" , image :IMAGES.ITEM13},
  {price : "AED 251.75" , image :IMAGES.ITEM18},
  {price : "AED 101.75" , image :IMAGES.ITEM15},
  {price : "AED 650.75" , image :IMAGES.ITEM16},

]
const breakPoints =[
  {width: 1, itemsToShow: 2},
  { width: 550, itemsToShow: 3, itemsToScroll: 1, pagination: true },
  { width: 850, itemsToShow: 4 },
  { width: 1150, itemsToShow:7, itemsToScroll: 1 , pagination:true},
  { width: 1450, itemsToShow: 9 },
  { width: 1750, itemsToShow: 11 },]
function TodaysDeal() {
  return (
    <div className='todaysDealMainConatainer'>
        <div className='todayDealsContainer'>
        <div className='thirdContainerText'>
                <h4>Today's Deals</h4>
            </div>
          <Carousel breakPoints={breakPoints} >
            {itemsOffer.map((itr,id)=>
            <div className='carousalContainer'>
                  <img className='todaysOfferImage' key={id} src={itr?.image} alt = {itr?.price}/>
                  <h3>{itr?.price}</h3>
            </div>
            
      )}
          </Carousel>
      </div>
        
    </div>
  )
}

export default TodaysDeal