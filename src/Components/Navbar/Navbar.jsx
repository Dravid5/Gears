import React, { useState } from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from '../Assets/images/logo.png'
import {Link} from 'react-router-dom';

export const Navbar = () => {

  const [menu,setMenu] = useState("Home");

  return (
    <div className='grid'>
      <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="" />
      </div>
      <div className="input">
        <IoIosSearch className='icon'/>
        <input  type="text" placeholder='Search on website'/>
      </div>
      <div className="nav_icons d-flex">
        <div className="nav_heart">
          <a href=""><FaRegHeart /></a>
        </div>
        <div className="nav_cart">
          <Link to={'/cart'}>
          <a href=""><MdOutlineShoppingCart /></a>
          </Link>
          <div className="nav_cart_count">0</div>
        </div>
        <div className="signin">
          <Link to={'/signin'}><a href="">Sign in</a></Link>
        </div>
      </div>
      </div>
      <ul className="nav_menu d-flex justify-content-between">
        <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration: 'none' ,color: 'black'}} to='/'>Home</Link>{menu==="Home"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("Helmets")}}><Link style={{textDecoration: 'none' ,color: 'black'}} to='/helmets'>Helmets</Link>{menu==="Helmets"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("Jackets")}}><Link style={{textDecoration: 'none' ,color: 'black'}} to='/jackets'>Jackets</Link>{menu==="Jackets"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("Shoes")}}><Link style={{textDecoration: 'none' ,color: 'black'}} to='/shoes'>Shoes</Link>{menu==="Shoes"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("Gloves")}}><Link style={{textDecoration: 'none' ,color: 'black'}} to='/gloves'>Gloves</Link>{menu==="Gloves"?<hr />:<></>}</li>
      </ul>
      
      
    </div>
  )
}
