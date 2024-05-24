import React from 'react'
import './Hero.css'
import herobg from '../Assets/images/herobg.jpg'


export const Hero = () => {
  
  return (
    <div className="hero" style={{ backgroundImage: `url(${herobg})`,height : "577px",width: "100%",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}>
      <h1>Gear Up for You Ride !</h1>
      <div className="flexbtn">
         <button>Shop Now</button>
      </div>
    </div>
    
  )
}
