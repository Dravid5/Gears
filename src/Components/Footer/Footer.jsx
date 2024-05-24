import React from 'react'
import './Footer.css'
import logo from '../Assets/images/logo.png'
import instagram from '../Assets/images/instagram_icon.png'
import pinterest from '../Assets/images/pintester_icon.png'
import whatsapp from '../Assets/images/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_img">
          <img src={logo} alt="" />
        </div>
        <ul className="footer_links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer_icons">
            <div className="footer_icon_container">
                <img src={instagram} alt="" />
            </div>
            <div className="footer_icon_container">
                <img src={pinterest} alt="" />
            </div>
            <div className="footer_icon_container">
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <div className="copyrights">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
    )
}
