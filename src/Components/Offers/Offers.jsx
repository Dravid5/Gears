import React from 'react'
import './Offers.css'
import banner from '../Assets/images/banner.jpg'

export const Offers = () => {
  return (
    <div className="offers"style={{ backgroundImage: `url(${banner})`,height : "350px",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}>
        <h2>Exclusive Offers For You</h2>
        <h3>Only On Gears</h3>
        <button className='offerbtn'>Explore Now</button>
    </div>
    )
}
