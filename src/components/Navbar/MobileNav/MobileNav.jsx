import React, { useState } from 'react'
import "./MobileNav.css";
const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
        <div 
        className={`mobile-menu ${isOpen ?"active":""}` }
        onClick={toggleMenu}
        >
             <div className="mobile-menu-container">
                {/* <img src="" alt="" className="logo" /> */}
                <h2>PortFolio</h2>

               <ul>
                <li>
                    <a className='menu-item'>Home</a>
                </li>

                <li>
                    <a className="menu-item">Skills</a>
                </li>

                <li>
                    <a className="menu-item">Projects</a>
                </li>

                <li>
                    <a className="menu-item">Contact Me</a>
                </li>

                <button className="contact-btn" onClick={()=>{}}>
                    Resume
                </button>
               </ul>

             </div>
        </div> 
    </>
  )
}

export default MobileNav
