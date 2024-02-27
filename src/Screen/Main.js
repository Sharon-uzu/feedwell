import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'
import img from '../Assets/Group_81-removebg-preview 1.png'
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import test from '../Assets/Sharon.jpeg'



const Main = () => {

  


  return (
    <div className='main'>
        <Header/>
        <div className='circle'>

        </div>

        <div className='main-c'>

          <div>

            <h6>-Coming Soon</h6>
            <h3>Get Notified When we Launch</h3>
            <form className='form'>
              <input type="email" placeholder='Enter your email'/>
              <button>Notify me</button>
              
            </form>
              <div className="icons">
                <span>
                    <TiSocialFacebook className='f-i'/>
                </span>

                <span>
                    <TiSocialTwitter className='f-i'/>
                </span>

                <span>
                    <FaInstagram className='f-i'/>
                </span>

                <span>
                    <CiYoutube className='f-i'/>
                </span>
              </div>

              

          </div>

          <div className='right'>
            <img src={img} alt="" />
            <div className="abs">
              <img src={test} alt="" />
              <div className='abs-r'>
                <span className='info'>
                  <b>Sharon Uzu</b>
                  <span>54mins</span>
                </span>
                <p>Wonderful product.... Amazing</p>
                <FaHeart className='hrt'/>
              </div>
            </div>
          </div>
            
        </div>

        
    </div>
  )
}

export default Main