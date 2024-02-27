import React from 'react'
import logo from '../Assets/logo-removebg-preview (1).png'
import { MdOutlineArrowOutward } from "react-icons/md";
import {useState} from 'react';
import { FaBars} from "react-icons/fa";
import { RiCloseFill} from "react-icons/ri";

const Header = () => {

  const [click, setClick] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);


  const handleClick = () => {
    setClick(!click);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling


  }
    const [activeNav, setActiveNav] = useState('/')

    const closeMenuBar = () => {
      setClick(false);
      document.body.style.overflow = 'auto'; // Enable scrolling

  
    };

  return (
    <div>
      <header>
          <img src={logo} alt="" />

          <nav className={click ? 'active' : 'menu'}>
            <ul>
              <li onClick={closeMenuBar}>FAQ</li>
              <li onClick={closeMenuBar}>Privacy Policy</li>
              <li onClick={closeMenuBar}>Email Us</li>
            </ul>
            <button>Shop <MdOutlineArrowOutward className='h-icon'/></button>
          </nav>

          <div className='bars' onClick={handleClick}>
          {click ? (<RiCloseFill id='close' style={{fontSize:'22px', color:'#eb6333', fontWeight:800}}/>) : (<FaBars id='bar' style={{ color:'#eb6333'}}/>)}
            
        </div>
          
      </header>
    </div>
  )
}

export default Header