import React from 'react'
import "./SkillsInfoCard.css"
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from '../../../utils/motion';

const SkillsInfoCard = ({heading, skills,
    index,
  }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 20,
        scale: 1,
        speed: 300,
      }}
    >
    <div className='skills-info-card'>
        <h6>{heading}</h6>

        <div className='skills-info-content'>
            {skills.map((item,index) => (
                <React.Fragment key={`skill_${index}`}>
                    <div className="skill-info">
                        <p>{item.skill}</p>
                        <p className="percentage">{item.percentage}</p>
                    </div>

                <div className="skill-progress-bg">
                    <div className="skill-progress" style={{width: item.percentage}}></div>
                </div>
            </React.Fragment>
        ))}
     </div>
 </div>
 </Tilt>
    </motion.div>
)}

export default SkillsInfoCard
