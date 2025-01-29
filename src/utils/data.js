import weather from '../assets/weather.png'
import reactbg from '../assets/reactbg.webp'
import rejouice from '../assets/rejouice.jpg'



export const SKILLS = [
 {
    title: "Frontend",
    icon: "./assets/images/frontend.png",
    skills:[
        {skill:"HTML", percentage: "80%"},
        {skill:"CSS", percentage: "85%"},
        {skill:"Javascript", percentage: "70%"},
        {skill:"React js", percentage: "80%"},
    ],
 },
 {
    title: "Backend",
    icon: "./assets/images/setting.png",
    skills:[
        {skill:"Node js", percentage: "70%"},
        {skill:"Express js", percentage: "65%"},
    ],
 },
 {
    title: "Tools",
    icon: "./assets/images/tool.png",
    skills:[
        {skill:"Git & Github", percentage: "85%"},
        {skill:"Visual Studio Code", percentage: "75%"},
        {skill:"Responsive Design", percentage: "70%"},
    ],
 },
 {
    title: "Database",
    icon: "./assets/images/hosting.png",
    skills:[
        {skill:"SQL", percentage: "80%"},
        {skill:"MongoDB", percentage: "85%"},
    ],
 },

];

export const projects = [
    {
      name: "Weather API",
      description:
      "Built a real-time Weather API using HTML , CSS and JAVASCRIPT where you can also view your current location weather details by granting location.",
        tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://weather-api-flax.vercel.app/",
    },
    {
      name: "Portfolio Website",
      description:
      "Developed a dynamic portfolio website using React, Tailwind CSS, and integrated captivating Three.js features for enhanced visual appeal and interactivity.",
       tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: reactbg,
      source_code_link: "https://github.com/Ashishkumar7005/React-Portfolio",
    },
    {
      name: "Rejoice",
      description:
      "Crafted an award-winning website, a Rejouice clone, featuring animations powered by GSAP and locomotive, enhancing user experience with seamless and stunning design.",
          tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: rejouice,
      source_code_link: "https://rejoice-ten.vercel.app/",
    },
  
  ];