import React, { useState} from 'react'
import "./Navbar.css"
import MobileNav from './MobileNav/MobileNav';
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu=()=>{
        setOpenMenu(!openMenu);
    }
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
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
  
      <nav className='nav-wrapper'>
        <div className="nav-content">
            <h1>Ashish Kumar</h1>
            {/* <img src="" alt="" className="logo" /> */}

            <ul>
                <li>
                    <a className="menu-item" href='#'>Home</a>
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
            <button className="menu-btn" onClick={toggleMenu}>
             {openMenu? <i class="fa-solid fa-x"></i> : <i class="fa-solid fa-bars" id="bars"></i>}    
            </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
