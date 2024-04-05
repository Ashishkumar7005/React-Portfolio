import React from 'react';
import './Hero.css';
import ComputersCanvas from '../canvas/computers';




const Hero = () => {
  return (
    <div>
      <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences that inspires</h2>
            <p>Aspiring Software Developer | Transforming ideas into seamless and visually stunning web solutions</p>
        </div>
      
      <div className='hero-img'>
            <div style={{ width: '50vw', height: '500px' }}>
                {/* <div className="tech-icon">
                <img src="./assets/images/logo192.png" alt="" />
                </div> */}
                    {/* <img src="./assets/images/coding-project-1884980-1597918.webp" alt="" /> */}
                   <ComputersCanvas/>
            </div>
            {/* <div>
                <div className="tech-icon">
                    <img src="./assets/images/html.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/css.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/javascript.png" alt="" />
                </div>
            </div> */}
      </div>

      </section>

    </div>
  )
}

export default Hero
