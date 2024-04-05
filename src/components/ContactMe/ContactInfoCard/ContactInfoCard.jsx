import React from 'react'
import "./ContactInfoCard.css"

const ContactInfoCard = ({iconUrl,text,linkUrl}) => {
  return (
         <div className='contact-details-card'>
             <div className='icon'>
              <a href={linkUrl} target='_blank' rel='noopener noreferrer'>
                 <img src={iconUrl} alt={text}  />
              </a>
             </div>
             <p>{text}</p>
         </div>
  )
}

export default ContactInfoCard
