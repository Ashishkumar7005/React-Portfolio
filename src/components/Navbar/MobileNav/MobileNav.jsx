import React from 'react'
import "./MobileNav.css";
const MobileNav = ({isOpen, toggleMenu}) => {
    const scrollToSkills = () => {
        const skillsSection = document.getElementById('skills');
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        const skillsSection = document.getElementById('contact');
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToProjects = () => {
        const skillsSection = document.getElementById('projects');
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    };
   
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
                    <a className="menu-item" href='/'>Home</a>
                </li>
                <li>
                    <a className="menu-item" onClick={scrollToSkills}>Skills</a>
                </li>
                <li>
                    <a className="menu-item" onClick={scrollToProjects}>Projects</a>
                </li>
                <li>
                    <a className="menu-item" onClick={scrollToContact}>Contact Me</a>
                </li>

                <button className="contact-btn" onClick={()=>{}} >
                    Resume
                </button>
            </ul>
          

             </div>
        </div> 
    </>
  )
}

export default MobileNav
